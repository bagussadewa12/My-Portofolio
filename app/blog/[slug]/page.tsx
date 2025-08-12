// app/blog/[slug]/page.tsx
import Image from 'next/image';

interface Post {
  title: string;
  slug: string;
  content: string;
  thumbnail: string;
  created_at: string;
}

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function Page({ params }: PageProps) {
  const apiBase = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';

  try {
    const res = await fetch(
      `${apiBase}/api/posts/${encodeURIComponent(params.slug)}`,
      { cache: 'no-store' } // biar selalu ambil fresh data
    );

    if (!res.ok) {
      console.error(`Fetch failed: ${res.status} ${res.statusText}`);
      throw new Error('Post not found');
    }

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
            <div className="prose prose-invert max-w-none text-gray-200 leading-relaxed" dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </article>
      </div>
    );
  } catch (error) {
    console.error('Error loading post:', error);
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Terjadi kesalahan</h1>
          <p className="text-gray-400">Post tidak ditemukan atau server sedang bermasalah.</p>
        </div>
      </div>
    );
  }
}
