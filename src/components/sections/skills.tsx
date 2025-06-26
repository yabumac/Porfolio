'use client';

import { motion } from 'framer-motion';
import { SectionWrapper } from '../section-wrapper';

const skills = [
  {
    category: 'Programming Languages',
    items: ['Java', 'JavaScript', 'C++', 'PHP', 'SQL', 'HTML/CSS', 'Python', 'TypeScript','Tailwind CSS']
  },
  {
    category: 'Frameworks & Tools',
    items: ['React', 'Node.js', 'Laravel', 'Flutter', 'Bootstrap', 'jQuery', 'Next.js', 'Git']
  },
  {
    category: 'Backend & Database',
    items: ['RESTful APIs', 'SQL', 'MongoDB', 'Token Auth', 'OTP Systems', 'Chapa Payment']
  },
  {
    category: 'Mobile Development',
    items: ['Flutter', 'Android (Java)', 'React Native', 'iOS (Swift)', 'Mobile UI/UX']
  },
  {
    category: 'System Design',
    items: ['API Design', 'Database Design', 'Security', 'Role-based Access', 'System Architecture']
  },
  {
    category: 'Additional Skills',
    items: ['UI/UX Design', 'Digital Literacy', 'AI Integration', 'Music Production', 'Team Leadership']
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: [0.25, 0.25, 0, 1]
    }
  })
};

const skillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
      ease: [0.25, 0.25, 0, 1]
    }
  })
};

export function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24">
      <SectionWrapper fromDirection="right">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-2 text-center"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Skills & Technologies
            </h2>
            <div className="mx-auto mt-4 h-1 w-12 bg-primary" />
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
              I work with a variety of technologies across the full stack, always keeping up with
              the latest industry standards and best practices.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {skills.map((skillGroup, groupIndex) => (
              <motion.div
                key={skillGroup.category}
                custom={groupIndex}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                className="group relative overflow-hidden rounded-lg bg-card p-6 shadow-lg transition-all hover:shadow-xl"
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                
                <div className="relative space-y-4">
                  <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
                    className="text-xl font-bold"
                  >
                    {skillGroup.category}
                  </motion.h3>
                  
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        custom={skillIndex}
                        variants={skillVariants}
                        className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm text-primary transition-colors hover:bg-primary/20"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Animated border */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: groupIndex * 0.2 }}
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