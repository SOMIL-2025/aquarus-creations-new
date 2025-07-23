'use client'

import { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/lib/firebase'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
// eslint-disable-next-line @typescript-eslint/no-explicit-any

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      setSuccess('Login successful 🎉')
      setError('')
      console.log('User:', userCredential.user)
    } catch (err: any) {
      setError(err.message)
      setSuccess('')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="bg-gray-900 p-8 rounded-2xl shadow-lg w-[90%] max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login to Aquarus 🌌</h2>
        
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-4 rounded bg-gray-800 border border-gray-700"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 rounded bg-gray-800 border border-gray-700"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="w-full bg-purple-600 hover:bg-purple-700 py-2 rounded font-semibold"
          onClick={handleLogin}
        >
          🚀 Login
        </button>

        {error && <p className="text-red-500 mt-4">{error}</p>}
        {success && <p className="text-green-400 mt-4">{success}</p>}
      </div>
    </div>
  )
}
