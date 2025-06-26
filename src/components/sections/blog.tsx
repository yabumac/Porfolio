'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/lib/blog-data';

// Show only the latest 3 posts in the main page
const latestPosts = blogPosts.slice(0, 3);

export function Blog() {
  return (
    <section id="blog" className="py-16 md:py-24">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Latest Blog Posts
            </h2>
            <p className="text-muted-foreground">
              Thoughts, tutorials, and insights about technology and development
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {latestPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg bg-background shadow-md transition-all hover:shadow-lg"
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="space-y-4 p-4">
                    <div className="space-y-2">
                      <h3 className="line-clamp-2 text-xl font-medium group-hover:text-primary">
                        {post.title}
                      </h3>
                      <p className="line-clamp-3 text-sm text-muted-foreground">
                        {post.excerpt}
                      </p>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <time dateTime={post.date}>{post.date}</time>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/blog"
              className="inline-flex items-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              View All Posts
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 