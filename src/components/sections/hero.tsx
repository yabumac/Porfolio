'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowDownIcon } from '@heroicons/react/24/outline';

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center py-16 md:py-24">
      <div className="container px-4">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8 text-center md:text-left"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
              >
                Hi, I&apos;m Yabsera Teshome
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mx-auto max-w-[600px] text-muted-foreground md:mx-0"
              >
                A passionate full-stack developer specializing in web and mobile app development.
                Currently studying Computer Science at Hawassa University.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-4 md:justify-start"
            >
              <Link
                href="#contact"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
              >
                Contact Me
              </Link>
              <Link
                href="#projects"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                View Projects
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative mx-auto aspect-square w-full max-w-md"
          >
            <Image
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5"
              alt="Yabsera Teshome"
              fill
              className="rounded-full object-cover"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
} 