'use client';

import { motion } from 'framer-motion';
import { ReadingProgress } from '@/components/reading-progress';

interface BlogPostContentProps {
  title: string;
  date: string;
  readTime: string;
  content: string;
}

export function BlogPostContent({ title, date, readTime, content }: BlogPostContentProps) {
  return (
    <div className="relative min-h-screen">
      <ReadingProgress />
      
      {/* Animated background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 right-0 h-[500px] bg-[radial-gradient(circle_500px_at_50%_200px,var(--primary-rgb,74_222_128)_0.1,transparent_80%)]" />
        </div>
      </div>

      <article className="container relative mx-auto px-4 py-16 md:py-24">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-4 text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl"
          >
            {title}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center justify-center gap-4 text-sm text-muted-foreground"
          >
            <time dateTime={date}>{date}</time>
            <span>{readTime}</span>
          </motion.div>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="prose prose-lg dark:prose-invert prose-headings:font-bold prose-headings:tracking-tighter prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-primary mx-auto max-w-4xl rounded-lg bg-card/50 p-8 shadow-lg backdrop-blur lg:prose-xl"
        >
          <div 
            dangerouslySetInnerHTML={{ __html: content }}
            className="max-w-none"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <a
            href="/blog"
            className="inline-flex items-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            ← Back to Blog
          </a>
        </motion.div>
      </article>
    </div>
  );
} 