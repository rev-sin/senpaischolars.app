# Senpai Scholars

Senpai Scholars is a course-selling website with a dedicated admin dashboard. 
It features a single login flow for both students and administrators, 
with role-based access control to direct users to their respective dashboards.

## Tech Stack

*   **Framework:** [Next.js](https://nextjs.org/) (App Router)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Package Manager:** [bun](https://bun.sh/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **UI Components:** [shadcn-ui](https://ui.shadcn.com/)
*   **Database ORM:** [Prisma](https://www.prisma.io/)
*   **Backend/Auth:** [Supabase](https://supabase.io/)
*   **Linting & Formatting:** [Biome](https://biomejs.dev/)

## Getting Started

Follow these instructions to set up and run the project locally.

### 1. Prerequisites

Make sure you have the following installed on your system:

*   [Node.js](httpss://nodejs.org/) (v18 or later recommended)
*   [bun](httpss://bun.sh/)

### 2. Clone the Repository

```bash
git clone https://github.com/your-repo/senpai-scholars.git
cd senpai-scholars
```

### 3. Install Dependencies

Install the project dependencies using `bun`:

```bash
bun install
```

### 4. Set Up Environment Variables

The project uses Supabase for the database and authentication.

1.  **Create a Supabase Project:** Go to [Supabase](httpss://supabase.com/) and create a new project.

2.  **Create a `.env` file:** Copy the `.env.sample` file to a new file named `.env`:

    ```bash
    cp .env.sample .env
    ```

3.  **Fill in the variables:** Get the required credentials from your Supabase project settings and add them to the `.env` file:

    *   `NEXT_PUBLIC_SUPABASE_URL`: Found in `Project Settings > API > Project URL`.
    *   `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Found in `Project Settings > API > Project API keys` (use the `anon` `public` key).
    *   `DATABASE_URL`: This is the connection pooler string. Go to `Project Settings > Database > Connection string` and select the `psql` tab with `Use connection pooling` checked.
    *   `DATABASE_DIRECT_URL`: This is the direct database connection string, used for running migrations. Go to `Project Settings > Database > Connection string` and select the `psql` tab with `Use connection pooling` unchecked.

### 5. Database Setup

1.  **Run Migrations:** Apply the database schema to your Supabase database using Prisma:

    ```bash
    bunx prisma migrate dev
    ```

2.  **Seed the Database:** The `supabase/seed.sql` file contains initial data for the database. Go to the `SQL Editor` in your Supabase project dashboard, paste the contents of `seed.sql`, and run the query.

### 6. Run the Development Server

Start the Next.js development server:

```bash
bun dev
```

The application should now be running at [http://localhost:3000](http://localhost:3000).

## Linting and Formatting

This project uses Biome for linting and formatting. To check and apply fixes, run:

```bash
bunx @biomejs/biome check --apply .
```

## Project Structure

*   `src/app/`: Contains the application's routes.
*   `src/components/`: Shared React components.
*   `src/lib/`: Utility functions and libraries (e.g., Supabase client).
*   `prisma/`: Prisma schema and configuration.
*   `supabase/`: Supabase-related configuration and functions.
