'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const blogPosts = [
  {
    title: 'Getting Started with Next.js and TypeScript',
    excerpt: 'A comprehensive guide to setting up a new project with Next.js and TypeScript, including best practices and common pitfalls to avoid.',
    date: 'March 1, 2024',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c',
    href: '#',
  },
  {
    title: 'Building Responsive UIs with Tailwind CSS',
    excerpt: 'Learn how to create beautiful, responsive user interfaces using Tailwind CSS, with practical examples and tips for optimization.',
    date: 'February 15, 2024',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8',
    href: '#',
  },
  {
    title: 'Modern State Management in React',
    excerpt: 'Exploring different state management solutions in React, from Context API to Redux Toolkit and Zustand.',
    date: 'February 1, 2024',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2',
    href: '#',
  },
];

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
              Thoughts, tutorials, and insights about web development
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg bg-background shadow-md transition-all hover:shadow-lg"
              >
                <Link href={post.href} className="block">
                  <div className="aspect-video w-full overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={600}
                      height={400}
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-4 p-4">
                    <div className="space-y-2">
                      <h3 className="line-clamp-2 font-medium group-hover:text-primary">
                        {post.title}
                      </h3>
                      <p className="line-clamp-2 text-sm text-muted-foreground">
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
        </motion.div>
      </div>
    </section>
  );
} 