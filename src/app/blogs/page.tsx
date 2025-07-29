import blogData from "@/lib/data/blogs.json";
import Link from "next/link";

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-purple-900 p-10 text-white">
      <h1 className="text-4xl font-bold mb-8">🪐 Cosmic Blogs</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {blogData.map((blog) => (
          <Link href={`/blogs/${blog.slug}`} key={blog.slug}>
            <div className="bg-gradient-to-br from-purple-700 to-black p-6 rounded-xl shadow-lg hover:scale-105 transition cursor-pointer">
              <img src={blog.image} alt={blog.title} className="mb-4 rounded shadow" />
              <h2 className="text-xl font-bold">{blog.title}</h2>
              <p className="text-sm text-purple-200 mt-2">{blog.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
