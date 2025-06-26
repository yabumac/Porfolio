'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { MapPinIcon, EnvelopeIcon, AcademicCapIcon, CodeBracketIcon, MusicalNoteIcon } from '@heroicons/react/24/outline';
import { SectionWrapper } from '../section-wrapper';

export function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <SectionWrapper fromDirection="left">
        <div className="container px-4">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            <div className="relative aspect-square overflow-hidden rounded-lg md:order-last">
              {/* Animated image container */}
              <motion.div
                initial={{ scale: 1.2, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, ease: [0.25, 0.25, 0, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src="/wallpaperflare.com_wallpaper (3).jpg"
                  alt="About Yabsera"
                  fill
                  className="object-cover"
                />
              </motion.div>
              
              {/* Animated overlay */}
              <motion.div
                initial={{ opacity: 0.8 }}
                whileInView={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: [0.25, 0.25, 0, 1] }}
                className="absolute inset-0 bg-primary"
              />
            </div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  About Me
                </h2>
                <div className="mt-4 h-1 w-12 bg-primary" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-4 text-muted-foreground"
              >
                <p>
                  As a graduate in Computer Science from Hawassa University, I've developed a strong foundation in both theoretical concepts and practical applications. My journey in tech has been driven by a passion for creating innovative solutions that make a real difference.
                </p>
                <p>
                  I specialize in full-stack development, with expertise in web and mobile applications. My experience includes developing complex systems with features like payment integration, OTP authentication, and role-based access control. I'm particularly proud of my work on digitizing manual processes and improving system efficiencies.
                </p>
                <p>
                  Beyond coding, I'm a creative soul with a love for music production and piano. I actively contribute to the community through the Benanion Charity Club and share my knowledge in the Nexus Science Fair Club.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="grid gap-4 sm:grid-cols-2"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <AcademicCapIcon className="h-5 w-5 text-primary" />
                    <span>Computer Science Graduate</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPinIcon className="h-5 w-5 text-primary" />
                    <span>Hawassa, Ethiopia</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <EnvelopeIcon className="h-5 w-5 text-primary" />
                    <span>contact@yabsera.dev</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <CodeBracketIcon className="h-5 w-5 text-primary" />
                    <span>Full Stack Developer</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MusicalNoteIcon className="h-5 w-5 text-primary" />
                    <span>Music Producer</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
} 