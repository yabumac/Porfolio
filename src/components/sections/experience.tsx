'use client';

import { motion } from 'framer-motion';
import { SectionWrapper } from '../section-wrapper';

const experiences = [
  {
    title: "Full Stack Development",
    role: "Web & Mobile Developer",
    description: "Developed and deployed multiple web applications with focus on responsive design and robust backend systems. Implemented role-based access control and secure authentication systems.",
    achievements: [
      "Built e-commerce platforms with integrated payment systems",
      "Developed school management portals with role-based access",
      "Created health appointment booking systems",
      "Implemented Chapa payment integration for mobile apps"
    ]
  },
  {
    title: "Mobile App Development",
    role: "Android & Flutter Developer",
    description: "Specialized in creating mobile applications with modern features and secure authentication systems. Focus on user experience and performance optimization.",
    achievements: [
      "Integrated OTP-based login systems",
      "Implemented token-based authentication",
      "Created responsive and intuitive UI designs",
      "Developed cross-platform applications using Flutter"
    ]
  },
  {
    title: "System Design & Architecture",
    role: "System Architect",
    description: "Designed and implemented complex systems focusing on scalability, security, and user experience. Specialized in digitizing manual processes and improving efficiency.",
    achievements: [
      "Designed database schemas for optimal performance",
      "Implemented RESTful APIs for system integration",
      "Created role-based access control systems",
      "Developed automated workflow solutions"
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24">
      <SectionWrapper fromDirection="left">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-2 text-center"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Professional Experience
            </h2>
            <div className="mx-auto mt-4 h-1 w-12 bg-primary" />
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
              A showcase of my professional journey and key achievements in software development
            </p>
          </motion.div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg bg-card p-6 shadow-lg transition-all hover:shadow-xl"
              >
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                
                <div className="relative space-y-4">
                  <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                  <p className="text-sm font-medium text-primary">{exp.role}</p>
                  <p className="text-sm text-muted-foreground">{exp.description}</p>
                  
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <motion.li
                        key={achievement}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: (index * 0.1) + (i * 0.05) }}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Animated border */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
} 