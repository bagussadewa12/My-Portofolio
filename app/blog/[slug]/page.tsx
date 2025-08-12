// app/blog/[slug]/page.tsx

import { notFound } from 'next/navigation';
import Image from 'next/image';

interface Post {
  title: string;
  slug: string;
  content: string;
  thumbnail: string;
  created_at: string;
}

export default async function Page({ params }: { params: { slug: string } }) {
  try {
    const res = await fetch(`http://127.0.0.1:8000/api/posts/${encodeURIComponent(params.slug)}`, { next: { revalidate: 0 } });

    if (!res.ok) throw new Error('Not found');

    const post: Post = await res.json();

    return (
      <div className="min-h-screen bg-black text-white py-10 px-4">
        <article className="max-w-3xl mx-auto bg-gray-900 rounded-xl shadow-lg overflow-hidden border border-gray-800">
          {/* Thumbnail */}
          <div className="relative w-full h-72 sm:h-96 bg-black flex items-center justify-center">
            <Image src={post.thumbnail} alt={post.title} fill className="object-cover" priority />
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8">
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">{post.title}</h1>
            <p className="text-gray-400 text-sm mb-6">
              {new Date(post.created_at).toLocaleDateString('id-ID', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
            <div className="prose prose-invert max-w-none text-gray-200 leading-relaxed">{post.content}</div>
          </div>
        </article>
      </div>
    );
  } catch (error) {
    return notFound();
  }
}
