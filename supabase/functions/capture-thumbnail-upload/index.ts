import "jsr:@supabase/functions-js/edge-runtime.d.ts"
import { Context, Hono } from "hono";
import { createClient } from '@supabase/supabase-js';

const functionName = 'capture-thumbnail-upload'
const app = new Hono().basePath(`/${functionName}`)

// Auth Hook sends a post request
app.post('/', async (c: Context) => {
  try {
    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    const { record: user } = await c.req.json();

    if(!user) {
      throw new Error('No user record found in request body.')
    }

    const newProfile = {
      id: user.id,
      email: user.email,
      fullName: user.raw_user_meta_data?.full_name || user.email,
    };

    const { error } = await supabaseAdmin.from('Profile').insert(newProfile);
    if(error) {
      throw error;
    }

    return c.json({
      message: `Profile created for user ${user.id}`
    }, 201);
  } catch (error) {
    return c.json({
      error: error.message,
    }, 400)
  }
})

Deno.serve(app.fetch);
