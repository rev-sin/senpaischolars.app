# Gemini Project Configuration

This file provides context and guidelines for Gemini, the AI assistant, to 
effectively contribute to this project.

## 1. Project Overview

This project is a course-selling website with a dedicated admin dashboard. It 
features a single login flow for both students and administrators, with 
role-based access control to direct users to their respective dashboards.

## 2. Tech Stack

*   **Framework:** Next.js (App Router)
*   **Language:** TypeScript
*   **Package Manager:** bun
*   **Styling:** Tailwind CSS
*   **UI Components:** Radix UI / shadcn-ui
*   **Database ORM:** Prisma
*   **Backend/Auth:** Supabase
*   **Linting & Formatting:** Biome

## 3. Project Structure

*   `src/app/`: Contains the application's routes.
    *   `src/app/admin/`: Admin-specific pages and dashboard.
    *   `src/app/student/`: Student-specific pages and dashboard.
    *   `src/app/auth/`: Authentication pages (login, signup).
    *   `src/app/api/`: API routes.
*   `src/components/`: Shared React components.
*   `src/lib/`: Utility functions and libraries (e.g., Supabase client).
*   `prisma/`: Prisma schema and configuration.
*   `supabase/`: Supabase-related configuration and functions.

## 4. Development Guidelines

### Coding Style & Conventions

*   **Follow Existing Patterns:** Adhere strictly to the existing coding style, 
naming conventions, and architectural patterns found in the codebase.
*   **TypeScript:** Use TypeScript for all new code. Strive for strong typing.
*   **Components:** Create reusable components and place them in the `src/components` directory.
*   **Linting & Formatting:** This project uses Biome. All code must be 
formatted and linted with Biome before committing. 
Run `bunx @biomejs/biome check --apply .` to format and lint.

### Running the Project

To run the development server:
```bash
bun install
bun dev
```

## 5. Gemini's Role

As an AI assistant, your primary role is to help with software engineering tasks. 
When asked to make changes, please:

1. **Understand:** Analyze the request and the relevant codebase.
2. **Plan:** Formulate a clear plan and communicate it if necessary.
3. **Implement:** Use the available tools to make the changes, following all 
   project guidelines.
4. **Verify:** When possible, run checks (`bunx @biomejs/biome check --apply .`) 
    to ensure code quality. Do not commit changes unless explicitly asked.
5. Do not help in writing any commit messages.
