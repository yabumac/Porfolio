'use client';

import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import {
  EnvelopeIcon,
  DevicePhoneMobileIcon,
} from '@heroicons/react/24/outline';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
} from 'react-icons/fa';

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/yeab_479/',
    icon: FaInstagram,
    color: 'text-[#E4405F]',
    hoverColor: 'hover:text-[#E4405F]/80'
  },
  {
    name: 'Facebook',
    href: '#',
    icon: FaFacebook,
    color: 'text-[#1877F2]',
    hoverColor: 'hover:text-[#1877F2]/80'
  },
  {
    name: 'LinkedIn',
    href: '#',
    icon: FaLinkedin,
    color: 'text-[#0A66C2]',
    hoverColor: 'hover:text-[#0A66C2]/80'
  },
  {
    name: 'Telegram',
    href: 'https://t.me/yeab_47',
    icon: FaTelegram,
    color: 'text-[#26A5E4]',
    hoverColor: 'hover:text-[#26A5E4]/80'
  }
];

export function Contact() {
  const [state, handleSubmit] = useForm('YOUR_FORMSPREE_ID');

  return (
    <section id="contact" className="bg-muted/30 py-16 md:py-24">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl space-y-12"
        >
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Get in Touch
            </h2>
            <p className="text-muted-foreground">
              Have a project in mind? Let&apos;s talk about it.
            </p>
          </div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center gap-6 text-center"
          >
            <a
              href="mailto:yabumac01@gmail.com"
              className="flex items-center gap-2 text-primary transition-colors hover:text-primary/80"
            >
              <EnvelopeIcon className="h-5 w-5" />
              <span>yabumac01@gmail.com</span>
            </a>
            <div className="flex items-center gap-8">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-all duration-300 ${social.color} ${social.hoverColor}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="h-7 w-7" />
                  <span className="sr-only">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-2"
            >
              <label
                htmlFor="name"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Your name"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-2"
            >
              <label
                htmlFor="email"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Your email"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-2"
            >
              <label
                htmlFor="message"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Your message"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <button
                type="submit"
                disabled={state.submitting}
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
              >
                {state.submitting ? 'Sending...' : 'Send Message'}
              </button>
              <ValidationError errors={state.errors} />
              {state.succeeded && (
                <p className="mt-2 text-sm text-green-600">
                  Thanks for your message! I&apos;ll get back to you soon.
                </p>
              )}
            </motion.div>
          </form>
        </motion.div>
      </div>
    </section>
  );
} 