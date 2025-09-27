# Authentication and RBAC Plan for Supabase & Next.js

This document outlines the plan for implementing user authentication 
(Google OAuth and Email/Password) and role-based access control (RBAC).

## 1. Analysis of `prisma/schema.prisma`

Your existing `Profile` table is already well-structured for both OAuth and 
email/password authentication.

- `id (UUID)`: Will be linked to the `id` of the user in Supabase's 
    `auth.users` table.
- `email (String, unique)`: Will be populated from the user's Google account 
    email or their sign-up email.
- `password (String?)`: This is optional, which is perfect for users who sign 
    up via an OAuth provider. For email sign-ups, this will be hashed and 
    managed by Supabase Auth.
- `oAuthProvider (String?)`: This field will store the name of the provider 
    (e.g., `'google'`). It will be null for email/password users.
- `oAuthProviderId (String?)`: This field will store the user's unique ID from 
    the OAuth provider. It will be null for email/password users.
- `role (Role)`: This defaults to `SCHOOL_STUDENT`, which is a good starting 
    point for all new users.

## 2. Implementation Steps

### Part A: Backend & DB Setup

#### 1. Sync Supabase Auth User to Prisma `Profile` Table
To automatically create a profile in your database when a new user signs up 
(regardless of method), a Supabase Function is the most robust method.
1.  **Create a Supabase Database Function:** Write a SQL function in the 
    Supabase SQL Editor that inserts a new record into your `public."Profile"` 
    table, mapping data from the new user in `auth.users`.

2.  **Create a Trigger:**
    -   Create a trigger that calls the function every time a new user is added 
    to the `auth.users` table.

#### 2. Configure Google OAuth (Optional)
If you want to enable Google OAuth, follow these steps:

1.  **Google Cloud Console:**
    -   Create a new project.
    -   Go to "APIs & Services" -> "Credentials".
    -   Create an "OAuth 2.0 Client ID" for a "Web application".
    -   Note the **Client ID** and **Client Secret**.

2.  **Supabase Dashboard:**
    -   Go to your project's "Authentication" -> "Providers" section.
    -   Enable the **Google** provider.
    -   Enter the **Client ID** and **Client Secret**.
    -   Copy the **Redirect URI** provided by Supabase.

3.  **Update Google Cloud Console:**
    -   Go back to your OAuth 2.0 Client ID settings.
    -   Add the **Redirect URI** from Supabase to the "Authorized redirect URIs" 
    list.

### Part B: Frontend Implementation

1.  **Install Dependencies:**
    -   Run `bun add @supabase/auth-helpers-nextjs @supabase/supabase-js`.

2.  **Environment Variables:**
    -   Add your Supabase project URL and anon key to your `.env.local` file:
      ```
      NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
      NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
      ```

3.  **Create Authentication UI & Logic:**
    -   **Sign-up Page (`src/app/auth/signup/page.tsx`):**
        -   Create a form with `email` and `password` fields.
        -   The form's submit handler will call `supabase.auth.signUp()`.
        -   **Note:** By default, Supabase requires email confirmation. The user 
        will be sent an email to verify their account before they can log in.

    -   **Login Page (`src/app/auth/login/page.tsx`):**
        -   Include a form for email/password login. The submit handler will 
        call `supabase.auth.signInWithPassword()`.
        -   If enabled, include a "Sign in with Google" button. The `onClick` 
        handler will call `supabase.auth.signInWithOAuth()`.

4.  **Handle the OAuth Callback:**
    -   This step is only required for OAuth providers like Google.
    -   Create a route handler at `src/app/auth/callback/route.ts` to exchange 
    the authorization code for a user session.
    -   After a successful login, this route will redirect the user to the 
    application's root (`/`).

### Part C: Role-Based Access Control (RBAC) & Route Protection

This is handled by a central Next.js Middleware.

1.  **Create Middleware:**
    -   Create a file at `src/middleware.ts`.
    -   This middleware will be configured to run on all admin and student routes:
      ```typescript
      export const config = {
        matcher: ['/admin/:path*', '/student/:path*'],
      };
      ```

2.  **Middleware Logic:**
    -   **Get Session:** Check for an active Supabase session. If none, redirect 
    to the login page.
    -   **Fetch Profile & Role:** If a session exists, use the user's ID to 
    query the Prisma `Profile` table and get their `role`.
    -   **Enforce Rules:**
        -   If a user with an `ADMIN` role tries to access a `/student/...` route, 
        redirect them to `/admin`.
        -   If a non-admin user tries to access an `/admin/...` route, 
        redirect them to `/student`.
        -   This logic protects both UI pages and API routes under these paths.
