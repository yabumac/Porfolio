'use client';

import { motion } from 'framer-motion';

const skills = {
  'Frontend Development': [
    'React.js',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'HTML5',
    'CSS3',
    'JavaScript',
  ],
  'Backend Development': [
    'Node.js',
    'Express.js',
    'Python',
    'Django',
    'RESTful APIs',
    'GraphQL',
  ],
  'Database & Cloud': [
    'MongoDB',
    'PostgreSQL',
    'Firebase',
    'AWS',
    'Docker',
    'Git',
  ],
  'Mobile Development': [
    'React Native',
    'Flutter',
    'Android (Java)',
    'iOS (Swift)',
  ],
};

const softSkills = [
  'Team Collaboration',
  'Fast Learner',
  'Problem Solving',
  'Communication',
  'Time Management',
  'Adaptability',
];

export function Skills() {
  return (
    <section id="skills" className="bg-muted/30 py-16 md:py-24">
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
              Skills & Expertise
            </h2>
            <p className="text-muted-foreground">
              My technical skillset and professional capabilities
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {Object.entries(skills).map(([category, items], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="space-y-4 rounded-lg bg-background p-6 shadow-sm"
              >
                <h3 className="font-semibold">{category}</h3>
                <ul className="space-y-2">
                  {items.map((skill, skillIndex) => (
                    <motion.li
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      }}
                      className="text-sm text-muted-foreground"
                    >
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-medium">Soft Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-2 rounded-lg bg-background p-4 shadow-sm"
                >
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span className="text-sm font-medium">{skill}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 