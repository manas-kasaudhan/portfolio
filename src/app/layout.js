import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { ToastProvider } from '@/components/Toast';
import ScrollProgressBar from '@/components/ScrollProgressBar';
import ScrollToTop from '@/components/ScrollToTop';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata = {
  title: 'Manas Kasaudhan | Full-Stack Developer & Frontend Engineer',
  description:
    'Portfolio of Manas Kasaudhan — Full-Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. Available for full-time roles and freelance projects.',
  keywords: [
    'Manas Kasaudhan',
    'Full Stack Developer',
    'Frontend Developer',
    'React Developer',
    'Next.js Developer',
    'Node.js Developer',
    'Portfolio',
    'Web Developer India',
    'JavaScript Developer',
    'Software Engineer',
  ],
  authors: [{ name: 'Manas Kasaudhan', url: 'https://github.com/manas-kasaudhan' }],
  creator: 'Manas Kasaudhan',
  openGraph: {
    title: 'Manas Kasaudhan | Full-Stack Developer',
    description:
      'Portfolio of Manas Kasaudhan — Full-Stack Developer specializing in React, Next.js, and Node.js.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Manas Kasaudhan Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manas Kasaudhan | Full-Stack Developer',
    description: 'Full-Stack Developer specializing in React, Next.js, and Node.js.',
    creator: '@manas_kasaudhan',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body style={{ fontFamily: 'var(--font-inter, Inter, sans-serif)' }} className="antialiased">
        <ThemeProvider>
          <ToastProvider>
            <ScrollProgressBar />
            {children}
            <ScrollToTop />
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
