'use client';
import { useRouter } from 'next/navigation';
import { useId, useState } from 'react';
import { createClient } from '@/lib/supabase/client';

export default function LoginPage() {
  const router = useRouter();
  const supabase = createClient();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function logIn() {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      console.error(error);
    }
    router.push('/');
  }

  async function signUp() {
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) {
      console.error(error);
    }
    router.push('/');
  }

  const emailId = useId();
  const passwordId = useId();

  return (
    <main>
      <form>
        <label htmlFor={emailId}>Email:</label>
        <input
          id={emailId}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor={passwordId}>Password:</label>
        <input
          id={passwordId}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="button"
          onClick={logIn}
        >
          Log in
        </button>
        <button
          type="button"
          onClick={signUp}
        >
          Sign up
        </button>
      </form>
    </main>
  );
}
