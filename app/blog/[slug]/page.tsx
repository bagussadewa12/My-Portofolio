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

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  // Karena params adalah Promise, kita harus await
  const { slug } = await params;

  try {
    const res = await fetch(`http://127.0.0.1:8000/api/posts/${slug}`, {
      cache: 'no-store', // supaya selalu ambil data terbaru
    });

    if (!res.ok) {
      return notFound();
    }

    const post: Post = await res.json();

    return (
      <div className="max-w-3xl mx-auto p-6">
        <Image src={post.thumbnail} alt={post.title} width={800} height={450} className="rounded-lg object-contain" />
        <div className="prose mt-6 text-white" dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    );
  } catch (error) {
    console.error(error);
    return notFound();
  }
}
