'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Octokit } from '@octokit/rest';
import Image from 'next/image';
import { CodeBracketIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

interface Repository {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null | undefined;
  topics: string[];
  language: string | null;
}

export function Projects() {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const octokit = new Octokit();
        const { data } = await octokit.repos.listForUser({
          username: 'YOUR_GITHUB_USERNAME',
          sort: 'updated',
          per_page: 6,
        });
        setRepos(data as Repository[]);
      } catch (error) {
        console.error('Error fetching repositories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section id="projects" className="bg-muted/30 py-16 md:py-24">
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
              Featured Projects
            </h2>
            <p className="text-muted-foreground">
              A selection of my recent work and contributions
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {loading ? (
              Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="h-64 animate-pulse rounded-lg bg-muted"
                />
              ))
            ) : (
              repos.map((repo, index) => (
                <motion.div
                  key={repo.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-lg bg-background shadow-md transition-all hover:shadow-lg"
                >
                  <div className="aspect-video w-full bg-muted">
                    <Image
                      src={`https://opengraph.githubassets.com/1/${repo.html_url.replace('https://github.com/', '')}`}
                      alt={repo.name}
                      width={600}
                      height={400}
                      className="object-cover"
                    />
                  </div>

                  <div className="space-y-4 p-4">
                    <div className="space-y-2">
                      <h3 className="font-medium">{repo.name}</h3>
                      <p className="line-clamp-2 text-sm text-muted-foreground">
                        {repo.description || 'No description available'}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {repo.topics?.map((topic) => (
                        <span
                          key={topic}
                          className="rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary"
                        >
                          {topic}
                        </span>
                      ))}
                      {repo.language && (
                        <span className="rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                          {repo.language}
                        </span>
                      )}
                    </div>

                    <div className="flex gap-4">
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary"
                      >
                        <CodeBracketIcon className="h-4 w-4" />
                        Code
                      </a>
                      {repo.homepage && (
                        <a
                          href={repo.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary"
                        >
                          <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                          Demo
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 