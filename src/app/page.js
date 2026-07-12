'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { personal } from '@/data/portfolio';
import PageLayout from '@/components/PageLayout';
import { FadeIn, StaggerContainer, fadeUpVariant } from '@/components/AnimateInView';
import { ButtonPrimary, ButtonOutline } from '@/components/UI';
import {
  IconBrandReact,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandTypescript,
  IconBrandMongodb,
  IconDatabase,
  IconBrandTailwind,
  IconServer,
  IconBolt,
  IconTarget,
  IconShieldLock,
  IconDeviceMobile,
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconCode,
  IconDownload,
  IconArrowRight,
} from '@tabler/icons-react';

const WebGLCanvas = dynamic(() => import('@/components/WebGLCanvas'), { ssr: false });

const stats = [
  { value: '4+',  label: 'Projects Built'    },
  { value: '1+',  label: 'Years Experience'  },
  { value: '10+', label: 'Technologies'      },
  { value: '6',   label: 'Months Internship' },
];

const techBadges = [
  { label: 'React.js',     Icon: IconBrandReact      },
  { label: 'Next.js',      Icon: IconBrandNextjs     },
  { label: 'Node.js',      Icon: IconBrandNodejs     },
  { label: 'TypeScript',   Icon: IconBrandTypescript },
  { label: 'MongoDB',      Icon: IconBrandMongodb    },
  { label: 'PostgreSQL',   Icon: IconDatabase        },
  { label: 'Tailwind CSS', Icon: IconBrandTailwind   },
  { label: 'Express.js',   Icon: IconServer          },
];

const highlights = [
  { Icon: IconBolt,         title: 'Fast',       desc: 'Performance-first mindset on every build'    },
  { Icon: IconTarget,       title: 'Precise',    desc: 'Clean, well-structured, maintainable code'   },
  { Icon: IconShieldLock,   title: 'Secure',     desc: 'Security baked into architecture by design'  },
  { Icon: IconDeviceMobile, title: 'Responsive', desc: 'Pixel-perfect across all screen sizes'       },
];

const socialLinks = [
  { label: 'GitHub',    href: personal.github,           Icon: IconBrandGithub,   external: true  },
  { label: 'LinkedIn',  href: personal.linkedin,          Icon: IconBrandLinkedin, external: true  },
  { label: 'LeetCode',  href: personal.leetcode,          Icon: IconCode,          external: true  },
  { label: 'Email',     href: `mailto:${personal.email}`, Icon: IconMail,          external: false },
];

export default function HomePage() {
  return (
    <PageLayout>
      {/* ═══════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* WebGL background */}
        <div className="absolute inset-0">
          <WebGLCanvas />
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-bg-primary)] via-[var(--color-bg-primary)] to-[var(--color-bg-secondary)]" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-accent/3 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-28 pb-20 w-full">
          <div className="max-w-3xl">

            {/* Available badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 border border-accent/20 rounded-full text-accent text-xs font-mono font-medium tracking-wider mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Available for opportunities
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-space text-4xl sm:text-5xl md:text-7xl font-bold text-[var(--color-text-primary)] leading-tight tracking-tight mb-4"
            >
              {personal.name}
            </motion.h1>

            {/* Animated role text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap items-center gap-3 mb-6 min-h-[40px]"
            >
              <span className="font-space text-lg sm:text-xl md:text-2xl font-semibold text-accent">
                <TypeAnimation
                  sequence={[
                    'Full-Stack Developer',   2000,
                    'Frontend Engineer',      2000,
                    'React Specialist',       2000,
                    'Problem Solver',         2000,
                    'UI/UX Enthusiast',       2000,
                    'Open Source Contributor',2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  deletionSpeed={70}
                  repeat={Infinity}
                  cursor={true}
                />
              </span>
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="text-[var(--color-text-muted)] text-base sm:text-lg leading-relaxed max-w-xl mb-10"
            >
              {personal.bio}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <ButtonPrimary href="/projects">
                View Projects
                <IconArrowRight size={16} stroke={2} />
              </ButtonPrimary>

              <a
                href={personal.resumePath}
                download="Manas_Kasaudhan_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 border border-accent/30 hover:border-accent/60 text-accent hover:bg-accent/10 font-medium rounded-xl transition-all duration-200 text-sm"
              >
                <IconDownload size={16} stroke={2} />
                Download Resume
              </a>

              <ButtonOutline href="/contact">
                <IconMail size={16} stroke={1.8} />
                Contact Me
              </ButtonOutline>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3 mb-12"
            >
              {socialLinks.map(({ label, href, Icon, external }) => (
                <a
                  key={label}
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className="group flex items-center justify-center w-10 h-10 rounded-xl border border-[var(--color-border)] hover:border-accent/40 text-[var(--color-text-secondary)] hover:text-accent hover:bg-accent/10 transition-all duration-200"
                >
                  <Icon size={18} stroke={1.8} />
                </a>
              ))}
            </motion.div>

            {/* Tech Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-2"
            >
              {techBadges.map(({ label, Icon }, i) => (
                <motion.span
                  key={label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.6 + i * 0.05 }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-[var(--color-border)] text-[var(--color-text-muted)] text-xs font-mono rounded-full hover:border-accent/40 hover:text-accent transition-all duration-200 cursor-default"
                >
                  <Icon size={13} stroke={1.5} />
                  {label}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[var(--color-text-secondary)] text-xs font-mono">scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-0.5 h-8 bg-gradient-to-b from-[var(--color-text-secondary)] to-transparent rounded"
          />
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════
          STATS
      ═══════════════════════════════════════════ */}
      <section className="py-20 border-y border-[var(--color-border)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={fadeUpVariant} className="text-center">
                <div className="font-space text-3xl sm:text-4xl font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-[var(--color-text-secondary)] text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          QUICK ABOUT
      ═══════════════════════════════════════════ */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <FadeIn direction="right">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 border border-accent/20 rounded-full text-accent text-xs font-mono font-medium tracking-wider mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  About Me
                </div>
                <h2 className="font-space text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-6 leading-tight">
                  Turning ideas into{' '}
                  <span className="text-accent">production-ready</span> software
                </h2>
                <p className="text-[var(--color-text-muted)] leading-relaxed mb-8">
                  I&apos;m a passionate full-stack developer who loves crafting clean, efficient solutions.
                  From building intuitive UIs to architecting scalable APIs — I bring ideas to life end-to-end.
                </p>
                <div className="flex flex-wrap gap-3">
                  <ButtonOutline href="/about">
                    Learn more about me
                    <IconArrowRight size={16} stroke={2} />
                  </ButtonOutline>
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--color-border)] hover:border-accent/40 text-[var(--color-text-secondary)] hover:text-accent font-medium rounded-xl transition-all duration-200 hover:bg-accent/5 text-sm"
                  >
                    <IconBrandGithub size={16} stroke={1.8} />
                    GitHub
                  </a>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {highlights.map(({ Icon, title, desc }) => (
                  <div
                    key={title}
                    className="p-5 bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-2xl hover:border-accent/30 hover:bg-[var(--color-bg-card-hover)] transition-all duration-300 group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center mb-3 group-hover:bg-accent/20 transition-colors">
                      <Icon size={18} className="text-accent" stroke={1.5} />
                    </div>
                    <div className="font-space font-semibold text-[var(--color-text-primary)] text-sm mb-1 group-hover:text-accent transition-colors">
                      {title}
                    </div>
                    <div className="text-[var(--color-text-secondary)] text-xs leading-relaxed">{desc}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FEATURED PROJECTS CTA
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-[var(--color-bg-card)] border-y border-[var(--color-border)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 border border-accent/20 rounded-full text-accent text-xs font-mono font-medium tracking-wider mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              My Work
            </div>
            <h2 className="font-space text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-4">
              Featured Projects
            </h2>
            <p className="text-[var(--color-text-muted)] max-w-lg mx-auto mb-10">
              A selection of things I&apos;ve built — from full-stack applications to interactive tools.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <ButtonPrimary href="/projects">
                View All Projects
                <IconArrowRight size={16} stroke={2} />
              </ButtonPrimary>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--color-border)] hover:border-accent/40 text-[var(--color-text-secondary)] hover:text-accent font-medium rounded-xl transition-all duration-200 hover:bg-accent/5 text-sm"
              >
                <IconBrandGithub size={16} stroke={1.8} />
                GitHub Profile
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageLayout>
  );
}
