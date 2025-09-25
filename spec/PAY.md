### 1. Environment and Configuration

*   **Razorpay Credentials:** Securely store your Razorpay Key ID and Key
    Secret in environment variables.
*   **Webhook Secret:** Configure a webhook secret in your Razorpay
    dashboard and store it as an environment variable. This will be
    used to verify incoming webhooks.

### 2. Backend API Development

*   **Order Creation Endpoint:**
    *   Create an API endpoint that accepts the course/video details
        and the payment amount.
    *   This endpoint will communicate with the Razorpay API to create
        a new payment order.
    *   It will then store the order details in your `Transaction`
        table with a `PENDING` status.
*   **Webhook Handler Endpoint:**
    *   Create an API endpoint to receive webhook notifications from
        Razorpay.
    *   This endpoint will be responsible for:
        *   Verifying the authenticity of the webhook using the
            webhook secret.
        *   Updating the transaction status in your database to
            `COMPLETED` upon successful payment.
        *   Triggering the access-granting mechanism.

### 3. Frontend Implementation

*   **Payment Initiation:**
    *   On the course/video purchase page, add a "Buy Now" or "Rent
        Now" button.
    *   When the button is clicked, make a request to your backend's
        order creation endpoint.
*   **Razorpay Checkout Integration:**
    *   Use the Razorpay Web Checkout script to open the payment
        gateway.
    *   Pass the order details received from your backend to the
        checkout script.
    *   Handle the success and failure callbacks from the checkout
        process to provide feedback to the user.

### 4. Access Control with Supabase

*   **Supabase Edge Function:**
    *   Develop a Supabase edge function that will be responsible for
        granting access to the purchased content.
    *   This function will be triggered by the webhook handler after a
        successful payment.
    *   It will add a new entry to the `UserCoursePurchases` or
        `UserContentPurchases` table, linking the user to the
        purchased content and setting the `validTill` timestamp.
*   **Role-Based Access Control (RLS):**
    *   Implement Row-Level Security (RLS) policies on your Supabase
        tables to ensure that users can only access the content they
        have purchased.

### 5. Cron Jobs for Access Revocation

*   **Database Function:**
    *   Create a PostgreSQL function in your Supabase database that
        will identify and remove expired content rentals from the
        `UserContentPurchases` table.
*   **Cron Job Scheduling:**
    *   Use Supabase's cron job feature to schedule the database
        function to run at regular intervals (e.g., once a day).
