import type { Metadata } from 'next';
import { Inter, Roboto_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { ScrollProgress } from '@/components/scroll-progress';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const robotoMono = Roboto_Mono({ subsets: ['latin'], variable: '--font-roboto-mono' });

export const metadata: Metadata = {
  title: 'Yabsera Teshome - Web & Mobile App Developer',
  description: 'Full-stack developer specializing in web and mobile app development. Computer Science student at Hawassa University.',
  keywords: ['web development', 'mobile app development', 'full stack developer', 'React', 'Node.js', 'JavaScript'],
  authors: [{ name: 'Yabsera Teshome' }],
  creator: 'Yabsera Teshome',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${robotoMono.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ScrollProgress />
          <div className="flex min-h-screen flex-col">
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
} 