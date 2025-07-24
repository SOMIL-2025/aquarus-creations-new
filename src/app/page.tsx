// src/app/page.tsx

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-indigo-900 text-white flex items-center justify-center p-8">
      <div className="max-w-4xl text-center">
        <div className="flex justify-center mb-6">
          <Image
            src="/images/aquarus-logo.png"
            alt="Aquarus Logo"
            width={120}
            height={120}
            className="rounded-full shadow-lg"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Introducing <span className="text-purple-400">Aquarus Creations</span> &{' '}
          <span className="text-blue-400">Aquini</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Emotional and Creative Agentic AI — Where cosmic emotion meets futuristic technology.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/login">
            <button className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-xl text-white font-medium transition">
              Login
            </button>
          </Link>
          <Link href="/signup">
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-xl text-white font-medium transition">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
