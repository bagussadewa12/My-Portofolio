'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Post {
  slug: string;
  title: string;
  content: string;
  author: string;
  thumbnail: string | null;
  created_at: string;
}

export default function Page() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/posts')
      .then((res) => {
        if (!res.ok) throw new Error('Gagal fetch data');
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setPosts(data);
        } else {
          setError('Data bukan array');
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <span className="text-lg font-medium animate-pulse">Loading...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-red-500">
        <p className="font-semibold">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white md:flex">
      {/* Sidebar Profil */}
      <aside className="w-full md:w-1/3 lg:w-1/4 bg-gray-900 shadow-lg p-8 border-r border-gray-800">
        <div className="flex flex-col items-center text-center">
          <Image src="/assets/images/bagus.png" alt="Profile Picture" width={96} height={96} className="w-24 h-24 rounded-full shadow-lg mb-4 object-cover border-4 border-gray-700" />
          <h2 className="text-2xl font-bold">Bagus Sadewa</h2>
          <p className="text-gray-400 text-sm">Frontend Developer</p>
        </div>

        <div className="mt-8 space-y-3">
          <h3 className="text-lg font-semibold border-b border-gray-700 pb-2">Contact</h3>
          <div className="flex items-center text-gray-300 text-sm">
            <Image src="/assets/icons/icons-gmail.png" alt="Email Icon" width={25} height={25} className="inline-block mr-2 cursor-pointer" />
            <span>komangbagussadewanetra@gmail.com</span>
          </div>
          <a href="https://github.com/bagussadewa12" className="flex items-center text-gray-300 text-sm mt-2">
            <Image src="/assets/icons/icons-github.png" alt="GitHub Icon" width={25} height={25} className="inline-block mr-2 bg-white rounded-full" />
            <span>Bagussadewa12</span>
          </a>
        </div>

        <div className="mt-8 space-y-3">
          <h3 className="text-lg font-semibold border-b border-gray-700 pb-2">Social Media</h3>
          <a href="https://www.instagram.com/bagussadewaaa_/" className="flex items-center text-gray-300 text-sm">
            <Image src="/assets/icons/icons-instagram.png" alt="Instagram Icon" width={28} height={28} className="inline-block mr-2" />
            <span>@bagussadewaaa_</span>
          </a>
          <a href="https://www.linkedin.com/in/bagus-sadewa-105365284/" className="flex items-center text-gray-300 text-sm">
            <Image src="/assets/icons/icons-linkedin.png" alt="LinkedIn Icon" width={28} height={28} className="inline-block mr-2" />
            <span>Bagus Sadewa Netra</span>
          </a>
        </div>
      </aside>

      {/* Konten Post */}
      <main className="flex-1 px-6 py-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-extrabold mb-10">My Blog</h1>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group bg-gray-900 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-800 overflow-hidden flex flex-col">
                <div className="relative w-full h-48 overflow-hidden">
                  {post.thumbnail ? (
                    <Image src={post.thumbnail} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                  ) : (
                    <div className="w-full h-full bg-gray-800 flex items-center justify-center text-gray-500">No Image</div>
                  )}
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <h2 className="text-lg font-semibold mb-2 group-hover:text-indigo-400 transition-colors">{post.title}</h2>
                  <p className="text-gray-400 text-sm flex-1 line-clamp-3">{post.content}</p>
                  <p className="text-xs text-gray-500 mt-2">By {post.author}</p>
                  <p className="text-xs text-gray-500 mt-auto">
                    {new Date(post.created_at).toLocaleDateString('id-ID', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
