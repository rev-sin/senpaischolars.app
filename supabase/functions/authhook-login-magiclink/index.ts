import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { Context, Hono } from "hono";
import React from "react";
import { Webhook } from "webhooks";
import { Resend } from "resend";
import { renderAsync } from "@react-email/components";
import { MagicLinkEmail } from "./_templates/magic-link.tsx";

// Preliminary setup
const app_name = "";
const email_domain = "";
const supabase_url = Deno.env.get('SUPABASE_URL') as string;
const resend = new Resend(Deno.env.get('RESEND_API_KEY') as string);
const hookSecret = Deno.env.get('SEND_EMAIL_WEBHOOK_SECRET') as string;

interface User {
  email: string;
}

interface EmailData {
  token: string;
  token_hash: string;
  redirect_to: string;
  email_action_type: string;
  site_url: string;
  token_new: string;
  token_hash_new: string;
}

interface WebhookResponse {
  user: User;
  email_data: EmailData;
}

// Edge function configurations
const functionName = 'auth-email';
const app = new Hono().basePath(`/${functionName}`);

// health-check
app.get('/health', (c: Context) => {
  return c.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
  }, 200)
})

// main webhook handler for supabase auth
app.post("/", async (c: Context)=> {

  const payload = c.req.text();
  const headers = c.req.header();
  const wh = new Webhook(hookSecret);

  try {

    const webhookData = wh.verify(payload, headers) as WebhookResponse;
    const { user, email_data } = webhookData;
    const { token, token_hash, redirect_to, email_action_type } = email_data;

    const html = await renderAsync(
      React.createElement(MagicLinkEmail, {
        supabase_url,
        token,
        token_hash,
        redirect_to,
        email_action_type
      })
    );

    const { data, error } = await resend.emails.send({
      from: `${app_name} <no-reply@${email_domain}>`,
      to: [user.email],
      subject: 'Sign-In Securely',
      html
    })
    if (error) {
      console.error('Email sending failed:', error)
      return c.json({
        error: {
          code: 'email_send_failed',
          message: error.message,
        }
      }, 400)
    }

    console.log('Magic link sent successfully:', data?.id);

    return c.json({
      success: true,
      message: 'Magic link sent successfully',
      email_id: data?.id,
    })

  } catch (error) {
    console.error('Unexpected error:', error);
    return c.json({
      code: 'internal_error',
      message: 'An unexpected error occured',
    }, 500)
  }

  return c.json({
    message: "Purchase confirmation email sent successfully",
  }, 200);
});


Deno.serve(app.fetch);
