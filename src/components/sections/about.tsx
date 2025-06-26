'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

export function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid gap-8 md:grid-cols-2 md:gap-12"
        >
          <div className="relative aspect-square overflow-hidden rounded-lg md:order-last">
            <Image
              src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61"
              alt="About Yabsera"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-2"
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                About Me
              </h2>
              <p className="text-muted-foreground">
                Get to know me and my journey in software development
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-4"
            >
              <p>
                Hello! I&apos;m Yabsera, a passionate full-stack developer with a focus on creating
                intuitive and efficient web applications. Currently pursuing my Computer Science
                degree at Hawassa University, I combine academic knowledge with practical
                experience in modern web technologies.
              </p>
              <p>
                My journey in software development started with a curiosity about how things
                work on the web. This curiosity has evolved into a deep passion for crafting
                digital experiences that make a difference. I specialize in both front-end and
                back-end development, with a particular interest in React, Node.js, and cloud
                technologies.
              </p>
              <p>
                When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing
                to open-source projects, or sharing my knowledge with fellow developers. I
                believe in continuous learning and staying updated with the latest industry
                trends.
              </p>
            </motion.div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPinIcon className="h-5 w-5" />
                <span>Bole Arabsa, Ethiopia</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <EnvelopeIcon className="h-5 w-5" />
                <a
                  href="mailto:yabumac01@gmail.com"
                  className="hover:text-primary"
                >
                  yabumac01@gmail.com
                </a>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium">Interests & Activities</h3>
              <ul className="list-inside list-disc space-y-1 text-muted-foreground">
                <li>Music production & Piano</li>
                <li>Football enthusiast</li>
                <li>Active member of charity & science clubs</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 