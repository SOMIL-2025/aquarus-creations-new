'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import Link from "next/link"; // ✅ required for navigation

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: any) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/blogs");
    } catch (e) {
      setError("Login failed. Please check your details.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-indigo-900 flex items-center justify-center p-8">
      <form onSubmit={handleLogin} className="bg-black/50 p-8 rounded-xl w-full max-w-md text-white">
        <h2 className="text-2xl font-bold mb-6 text-center">Login to Aquarus</h2>
        <label className="block mb-2">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          className="w-full p-3 rounded bg-gray-800 mb-4"
          required
        />
        <label className="block mb-2">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          className="w-full p-3 rounded bg-gray-800 mb-4"
          required
        />
        {error && <p className="text-red-400 mb-4">{error}</p>}
        <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 py-3 rounded font-semibold mb-4">
          Login
        </button>
        <p className="text-center">
          No account?{" "}
          <Link href="/signup" className="text-blue-400 hover:underline">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
}
