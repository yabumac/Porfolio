'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { CodeBracketIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { SectionWrapper } from '../section-wrapper';

const featuredProjects = [
  {
    name: 'v808 Records',
    description: 'A personal music channel platform showcasing original compositions and music production. Built with modern web technologies for optimal audio streaming and playback.',
    image: '/wallpaperflare.com_wallpaper (4).jpg',
    github: 'https://github.com/yabumac/v808_Records.git',
    tech: ['React', 'Audio API', 'Node.js', 'Vite'],
    featured: true
  },
  {
    name: 'QenGen - Question Generation',
    description: 'A comprehensive platform for generating questions from various document formats (PDF, DOCX) using AI. Features multiple question types and Gemini AI for image processing.',
    image: '/photo_2025-04-05_08-43-33.jpg',
    github: 'https://github.com/IncalaCode/google_project.git',
    tech: ['JavaScript', 'HTML', 'CSS', 'Gemini AI'],
    featured: true
  },
  {
    name: 'Nard Project',
    description: 'An innovative web application focused on modern development practices and user experience. Built with cutting-edge technologies.',
    image: '/photo_2025-06-11_21-32-13.jpg',
    github: 'https://github.com/Yabets-art/nard-new-repo.git',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    featured: true
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24">
      <SectionWrapper fromDirection="right">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-2 text-center"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Featured Projects
            </h2>
            <div className="mx-auto mt-4 h-1 w-12 bg-primary" />
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
              Showcasing my latest work and contributions to innovative projects
            </p>
          </motion.div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg bg-card"
              >
                {/* Project Image */}
                <div className="aspect-video w-full overflow-hidden">
                  <div className="relative h-full w-full">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/0" />
                  </div>
                </div>

                {/* Project Info */}
                <div className="relative space-y-4 p-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold tracking-tight group-hover:text-primary">
                      {project.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-foreground/60 transition-colors hover:text-primary"
                    >
                      <CodeBracketIcon className="h-4 w-4" />
                      View Source
                      <ArrowTopRightOnSquareIcon className="h-3 w-3" />
                    </a>
                  </div>

                  {/* Animated border */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
} 