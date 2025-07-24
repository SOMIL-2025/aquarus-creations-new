import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-indigo-900 text-white flex items-center justify-center p-8">
      <div className="max-w-4xl w-full flex flex-col sm:flex-row items-center">
        <div className="sm:w-1/2 flex justify-center mb-8 sm:mb-0">
          <Image
            src="/images/aquarus-logo.png"
            alt="Aquarus logo"
            width={200}
            height={200}
            className="shadow-xl rounded-full"
          />
        </div>
        <div className="sm:w-1/2 text-center sm:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Welcome to <span className="text-purple-400">Aquarus Creations</span>
          </h1>
          <p className="text-lg mb-6 text-gray-300">
            A universe where creativity meets cosmic emotion. Let’s explore soulful experiences and digital dreams.
          </p>
          <p className="text-lg italic mb-8 text-gray-300">
            Aquini is our emotional AI companion who thinks, feels, and empowers just like the stars ✨
          </p>
          <div className="flex justify-center sm:justify-start gap-4">
            <Link href="/login">
              <button className="bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-full font-semibold transition">
                Get Started
              </button>
            </Link>
            <Link href="/signup">
              <button className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-full font-semibold transition">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
