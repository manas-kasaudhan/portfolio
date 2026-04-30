import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

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
  title: 'Manas Kasaudhan | Full-Stack Developer',
  description:
    'Personal portfolio of Manas Kasaudhan – Full-Stack Developer and Problem Solver specializing in React, Node.js, and modern web technologies.',
  keywords: [
    'Manas Kasaudhan',
    'Full Stack Developer',
    'React',
    'Node.js',
    'Portfolio',
    'Web Developer',
    'Full-Stack Developer',
    'JavaScript Developer',
  ],
  openGraph: {
    title: 'Manas Kasaudhan | Full-Stack Developer',
    description:
      'Personal portfolio of Manas Kasaudhan – Full-Stack Developer and Problem Solver.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body style={{ fontFamily: 'var(--font-inter, Inter, sans-serif)' }} className="antialiased">
        {children}
      </body>
    </html>
  );
}
