'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';

export default function SignupPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push('/blogs');
    } catch (e: any) {
      setError('Signup failed. Try a stronger password or different email.');
      console.error(e.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]">
      <form
        onSubmit={handleSignup}
        className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-2xl w-96"
      >
        <h2 className="text-3xl font-bold text-white mb-6 text-center tracking-wide">
          Sign up to <span className="text-[#00BFFF]">Aquarus</span>
        </h2>

        {error && (
          <p className="text-red-400 text-sm text-center mb-4">{error}</p>
        )}

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 px-4 py-2 bg-white/10 text-white placeholder-white/70 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00BFFF]"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 px-4 py-2 bg-white/10 text-white placeholder-white/70 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00BFFF]"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-[#00BFFF] hover:bg-[#009acd] transition-all text-white py-2 rounded-lg font-semibold shadow-md"
        >
          Create Account
        </button>
      </form>
    </div>
  );
}
