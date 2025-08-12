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

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function Page({ params }: PageProps) {
  try {
    const res = await fetch(`http://127.0.0.1:8000/api/posts/${params.slug}`, {
      cache: 'no-store', // biar selalu ambil data terbaru
    });

    if (!res.ok) {
      notFound();
    }

    const post: Post = await res.json();

    return (
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <Image
          src={post.thumbnail}
          alt={post.title}
          width={800}
          height={450}
          className="rounded-lg object-contain" // object-contain supaya foto tidak terpotong
        />
        <div className="prose mt-6" dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    );
  } catch (error) {
    console.error(error);
    notFound();
  }
}
