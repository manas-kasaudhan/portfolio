'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { motion } from 'framer-motion';
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
} from '@tabler/icons-react';

const WebGLCanvas = dynamic(() => import('@/components/WebGLCanvas'), { ssr: false });

const stats = [
  { value: '4+', label: 'Projects Built' },
  { value: '1+', label: 'Years Experience' },
  { value: '10+', label: 'Technologies' },
  { value: '6', label: 'Months Internship' },
];

const techBadges = [
  { label: 'React.js',    Icon: IconBrandReact },
  { label: 'Next.js',     Icon: IconBrandNextjs },
  { label: 'Node.js',     Icon: IconBrandNodejs },
  { label: 'TypeScript',  Icon: IconBrandTypescript },
  { label: 'MongoDB',     Icon: IconBrandMongodb },
  { label: 'PostgreSQL',  Icon: IconDatabase },
  { label: 'Tailwind CSS',Icon: IconBrandTailwind },
  { label: 'Express.js',  Icon: IconServer },
];

const highlights = [
  { Icon: IconBolt,         title: 'Fast',       desc: 'Performance-first mindset on every build' },
  { Icon: IconTarget,       title: 'Precise',    desc: 'Clean, well-structured, maintainable code' },
  { Icon: IconShieldLock,   title: 'Secure',     desc: 'Security baked into architecture by design' },
  { Icon: IconDeviceMobile, title: 'Responsive', desc: 'Pixel-perfect across all screen sizes' },
];

export default function HomePage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <WebGLCanvas />
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-[#2B2D31] via-[#2B2D31] to-[#1e2023]" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-accent/3 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-28 pb-20 w-full">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 border border-accent/20 rounded-full text-accent text-xs font-mono font-medium tracking-wider mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Available for opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-space text-4xl sm:text-5xl md:text-7xl font-bold text-[#D8DADD] leading-tight tracking-tight mb-4"
            >
              {personal.name}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap items-center gap-3 mb-6"
            >
              <span className="font-space text-lg sm:text-xl md:text-2xl font-semibold text-accent">
                {personal.title}
              </span>
              <span className="text-[#5A6068]">|</span>
              <span className="font-space text-lg sm:text-xl md:text-2xl font-medium text-[#D8DADD]/60">
                {personal.subtitle}
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="text-[#D8DADD]/60 text-base sm:text-lg leading-relaxed max-w-xl mb-10"
            >
              {personal.bio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap gap-4 mb-16"
            >
              <ButtonPrimary href="/projects">
                View Projects
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </ButtonPrimary>
              <ButtonOutline href="/contact">
                Get in Touch
              </ButtonOutline>
            </motion.div>

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
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 text-[#D8DADD]/60 text-xs font-mono rounded-full hover:border-accent/40 hover:text-accent transition-all duration-200 cursor-default"
                >
                  <Icon size={13} stroke={1.5} />
                  {label}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[#5A6068] text-xs font-mono">scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-0.5 h-8 bg-gradient-to-b from-[#5A6068] to-transparent rounded"
          />
        </motion.div>
      </section>

      {/* Stats */}
      <section className="py-20 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={fadeUpVariant} className="text-center">
                <div className="font-space text-3xl sm:text-4xl font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-[#5A6068] text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Quick About */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <FadeIn direction="right">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 border border-accent/20 rounded-full text-accent text-xs font-mono font-medium tracking-wider mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  About Me
                </div>
                <h2 className="font-space text-2xl sm:text-3xl md:text-4xl font-bold text-[#D8DADD] mb-6 leading-tight">
                  Turning ideas into{' '}
                  <span className="text-accent">production-ready</span> software
                </h2>
                <p className="text-[#D8DADD]/60 leading-relaxed mb-8">
                  I&apos;m a passionate full-stack developer who loves crafting clean, efficient solutions.
                  From building intuitive UIs to architecting scalable APIs — I bring ideas to life end-to-end.
                </p>
                <ButtonOutline href="/about">
                  Learn more about me
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </ButtonOutline>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {highlights.map(({ Icon, title, desc }) => (
                  <div
                    key={title}
                    className="p-5 bg-white/3 border border-white/8 rounded-2xl hover:border-accent/30 hover:bg-accent/5 transition-all duration-300 group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center mb-3 group-hover:bg-accent/20 transition-colors">
                      <Icon size={18} className="text-accent" stroke={1.5} />
                    </div>
                    <div className="font-space font-semibold text-[#D8DADD] text-sm mb-1 group-hover:text-accent transition-colors">
                      {title}
                    </div>
                    <div className="text-[#5A6068] text-xs leading-relaxed">{desc}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white/2 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 border border-accent/20 rounded-full text-accent text-xs font-mono font-medium tracking-wider mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              My Work
            </div>
            <h2 className="font-space text-2xl sm:text-3xl md:text-4xl font-bold text-[#D8DADD] mb-4">
              Featured Projects
            </h2>
            <p className="text-[#D8DADD]/60 max-w-lg mx-auto mb-10">
              A selection of things I&apos;ve built — from full-stack applications to interactive tools.
            </p>
            <ButtonPrimary href="/projects">
              View All Projects
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </ButtonPrimary>
          </FadeIn>
        </div>
      </section>
    </PageLayout>
  );
}
