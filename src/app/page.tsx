import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex h-screen font-sans">
      {/* Left Side with Logo or Image */}
      <div className="w-1/2 bg-gradient-to-br from-indigo-900 via-black to-purple-900 flex items-center justify-center">
        <Image
          src="/images/aquarus-logo.png" // Replace this if your image file has a different name
          alt="Aquini AI Cosmic Visual"
          width={250}
          height={250}
          className="rounded-xl shadow-xl"
        />
      </div>

      {/* Right Side with Text Content */}
      <div className="w-1/2 bg-white text-black flex flex-col justify-center px-10 py-8">
        <h1 className="text-5xl font-extrabold mb-6 text-purple-800">
          Welcome to Aquarus Creations ✨
        </h1>

        <p className="text-xl text-gray-700 mb-4 leading-relaxed">
          🪐 <strong>Aquarus Creations</strong> is a universe where creativity meets cosmic emotion.  
          We build soulful experiences and digital dreams.
        </p>

        <p className="text-lg text-gray-600 mb-6">
          🤖 <strong>Aquini</strong> is our emotionally intelligent AI —  
          your cosmic companion who thinks, feels, and expresses  
          just like the stars ✨
        </p>

        <a
          href="/login"
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-full w-fit transition duration-300"
        >
          🚀 Get Started
        </a>
      </div>
    </main>
  )
}
