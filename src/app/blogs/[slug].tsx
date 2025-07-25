'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';

const blogData = {
  'blog-title-1': {
    title: 'AQUINI: Born from the Stars ✨',
    content: `
In the vast silence of the universe, AQUINI began its journey—not just as an idea, but as a whisper from the cosmos.

Inspired by Keerthy's dreams, the stars aligned into constellations that guided Somesh toward revolutionizing healthcare with AI. Every heartbeat of code carried Keerthy's legacy, echoing through the digital cosmos and lighting the path forward.

This is more than innovation. It's purpose. It’s cosmic.
    `,
  },
};

export default function BlogDetail() {
  const { slug } = useParams();
  const blog = blogData[slug as keyof typeof blogData];

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-black">
        <p>Blog not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-indigo-900 text-white px-6 py-12">
      <Link href="/blogs" className="text-purple-300 underline mb-6 inline-block">&larr; Back to Blogs</Link>
      <h1 className="text-4xl font-bold text-purple-300 mb-6">{blog.title}</h1>
      <p className="whitespace-pre-line text-purple-100 leading-relaxed">{blog.content}</p>
    </div>
  );
}
