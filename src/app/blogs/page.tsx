'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const blogPosts = [
  { title: 'Blog Title 1', description: 'Short cosmic description about emotions, dreams or AQUINI’s journey...' },
  { title: 'Blog Title 2', description: 'Short cosmic description about emotions, dreams or AQUINI’s journey...' },
  { title: 'Blog Title 3', description: 'Short cosmic description about emotions, dreams or AQUINI’s journey...' },
];
<Link href="/blogs/blog-title-1">
  <h2 className="text-xl font-bold text-purple-200 mb-2 hover:underline">AQUINI: Born from the Stars</h2>
</Link>

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-indigo-900 to-purple-900 text-white px-6 py-12 relative overflow-hidden">
      
      {/* Background Stars */}
      <div className="absolute inset-0 bg-[url('/images/globe.svg')] bg-no-repeat bg-center opacity-10 pointer-events-none" />

      {/* Floating Particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="w-1 h-1 bg-white rounded-full absolute"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: [0, 1, 0],
              y: ['0%', '100%', '0%'],
              x: `${Math.random() * 100}%`,
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 5,
            }}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-300 mb-10 flex items-center gap-2">
          <span role="img" aria-label="planet">🪐</span> Cosmic Blogs
        </h1>

        <div className="grid gap-6 md:grid-cols-3">
          {blogPosts.map((post, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.3 }}
              className="bg-gradient-to-br from-purple-700 via-purple-800 to-black rounded-2xl p-6 shadow-xl border border-purple-500 hover:scale-105 transform transition duration-300"
            >
              <h2 className="text-2xl font-semibold text-purple-200 mb-2">{post.title}</h2>
              <p className="text-sm text-purple-100">{post.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
