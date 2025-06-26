'use client';

import { motion } from 'framer-motion';
import { AcademicCapIcon, BriefcaseIcon } from '@heroicons/react/24/outline';

const experiences = [
  {
    title: 'Full Stack Developer',
    company: 'Freelance',
    period: '2022 - Present',
    description: [
      'Developed and maintained web applications using React, Next.js, and Node.js',
      'Implemented responsive designs and modern UI/UX practices',
      'Worked with clients to understand requirements and deliver solutions',
    ],
  },
  {
    title: 'Mobile App Developer',
    company: 'Tech Startup',
    period: '2021 - 2022',
    description: [
      'Built cross-platform mobile applications using React Native',
      'Integrated RESTful APIs and implemented offline-first functionality',
      'Collaborated with design team to create intuitive user interfaces',
    ],
  },
  {
    title: 'Web Development Intern',
    company: 'Local Agency',
    period: '2020 - 2021',
    description: [
      'Assisted in developing and maintaining client websites',
      'Learned modern web development practices and tools',
      'Participated in code reviews and team meetings',
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24">
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
              Work Experience
            </h2>
            <p className="text-muted-foreground">
              My professional journey and achievements
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-lg bg-muted/30 p-6"
              >
                <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <h3 className="font-semibold">{experience.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {experience.company}
                    </p>
                  </div>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {experience.period}
                  </span>
                </div>
                <ul className="ml-4 list-disc space-y-2 text-sm text-muted-foreground">
                  {experience.description.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1 + itemIndex * 0.05,
                      }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 