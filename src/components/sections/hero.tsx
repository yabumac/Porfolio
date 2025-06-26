'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowDownIcon } from '@heroicons/react/24/outline';
import Typewriter from 'typewriter-effect';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-16 md:py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent dark:from-primary/10" />
      
      {/* Animated background dots */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-2 h-2 bg-primary/20 rounded-full top-1/4 left-1/4 animate-pulse" />
        <div className="absolute w-3 h-3 bg-primary/20 rounded-full top-3/4 left-1/3 animate-pulse delay-300" />
        <div className="absolute w-2 h-2 bg-primary/20 rounded-full top-1/3 right-1/4 animate-pulse delay-500" />
        <div className="absolute w-4 h-4 bg-primary/20 rounded-full bottom-1/4 right-1/3 animate-pulse delay-700" />
      </div>

      <div className="container px-4 relative">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8 text-center md:text-left"
          >
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-primary font-mono text-sm md:text-base"
              >
                <span className="inline-block w-2 h-2 bg-primary rounded-full mr-2 animate-pulse" />
                Full Stack Developer
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
              >
                <span className="block">Hi, I&apos;m</span>
                <span className="gradient-text glow">Yabsera Teshome</span>
                <div className="h-16 sm:h-20 xl:h-24">
                  <Typewriter
                    options={{
                      strings: [
                        'Building the web',
                        'Creating experiences',
                        'Solving problems',
                        'Bringing ideas to life'
                      ],
                      autoStart: true,
                      loop: true,
                      delay: 50,
                      deleteSpeed: 25,
                      wrapperClassName: 'text-primary text-3xl sm:text-4xl xl:text-5xl/none font-normal',
                      cursorClassName: 'text-primary text-3xl sm:text-4xl xl:text-5xl/none'
                    }}
                  />
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mx-auto max-w-[600px] text-muted-foreground md:mx-0"
              >
                A passionate full-stack developer specializing in web and mobile app development.
                Currently studying Computer Science at Hawassa University.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-wrap justify-center gap-4 md:justify-start"
            >
              <Link
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector('#contact');
                  if (element) {
                    const headerOffset = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
                className="gradient-border inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-all hover:scale-105"
              >
                Contact Me
              </Link>
              <Link
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector('#projects');
                  if (element) {
                    const headerOffset = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
                className="gradient-border inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-all hover:scale-105 hover:bg-accent hover:text-accent-foreground"
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
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent animate-pulse" />
            <Image
              src="/photo_2025-06-11_21-32-13.jpg"
              alt="Yabsera Teshome"
              fill
              className="rounded-full object-cover float-animation"
              priority
            />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ArrowDownIcon className="h-6 w-6 text-primary animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
} 