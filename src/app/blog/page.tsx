'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { blogPosts } from '@/lib/blog-data';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function BlogPage() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen">
      {/* Animated background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 right-0 h-[500px] bg-[radial-gradient(circle_500px_at_50%_200px,var(--primary-rgb,74_222_128)_0.1,transparent_80%)]" />
        </div>
      </div>

      <div className="container relative px-4 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="mb-4 text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl">
            Blog Posts
          </h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Explore my thoughts on technology, development, and creativity. From coding tutorials to philosophical musings on modern tech.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {blogPosts.map((post) => (
            <motion.article
              key={post.slug}
              variants={item}
              className="group relative overflow-hidden rounded-lg bg-card/50 shadow-md backdrop-blur transition-all hover:-translate-y-1 hover:shadow-xl cursor-pointer"
              onClick={() => router.push(`/blog/${post.slug}`)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="block p-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h2 className="line-clamp-2 text-xl font-medium tracking-tight group-hover:text-primary">
                      {post.title}
                    </h2>
                    <p className="line-clamp-3 text-sm text-muted-foreground">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <time dateTime={post.date} className="transition-colors group-hover:text-primary">
                      {post.date}
                    </time>
                    <span className="transition-colors group-hover:text-primary">
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </div>
  );
} 