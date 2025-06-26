import { blogPosts } from '@/lib/blog-data';
import { notFound } from 'next/navigation';
import { BlogPostContent } from '@/components/blog-post-content';

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return <BlogPostContent {...post} />;
} 