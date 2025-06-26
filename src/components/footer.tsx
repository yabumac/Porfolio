import * as React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t bg-muted/30 py-6 md:py-8">
      <div className="container px-4">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex flex-col items-center gap-4 md:flex-row md:gap-2">
            <p className="text-center text-sm text-muted-foreground">
              © {new Date().getFullYear()} Yabsera Teshome. All rights reserved.
            </p>
            <span className="hidden md:inline text-muted-foreground">•</span>
            <p className="text-center text-sm text-muted-foreground">
              References available upon request (Mokonen Moke, Head of Dept.)
            </p>
          </div>

          <nav className="flex gap-4 text-sm text-muted-foreground">
            <Link href="#about" className="hover:text-primary">
              About
            </Link>
            <Link href="#projects" className="hover:text-primary">
              Projects
            </Link>
            <Link href="#contact" className="hover:text-primary">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
} 