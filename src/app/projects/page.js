'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '@/data/portfolio';
import PageLayout from '@/components/PageLayout';
import { FadeIn, StaggerContainer, fadeUpVariant } from '@/components/AnimateInView';
import {
  IconBrandGithub,
  IconArrowUpRight,
  IconCircleFilled,
  IconBrandReact,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandTypescript,
  IconBrandMongodb,
  IconDatabase,
  IconBrandTailwind,
  IconServer,
  IconApi,
  IconChartBar,
  IconMap2,
  IconBrandSocketIo,
  IconExternalLink,
  IconFilter,
} from '@tabler/icons-react';

const techIcons = {
  'React.js':           IconBrandReact,
  'Next.js':            IconBrandNextjs,
  'Node.js':            IconBrandNodejs,
  'TypeScript':         IconBrandTypescript,
  'MongoDB':            IconBrandMongodb,
  'PostgreSQL':         IconDatabase,
  'MySQL':              IconDatabase,
  'Tailwind CSS':       IconBrandTailwind,
  'Express.js':         IconServer,
  'REST APIs':          IconApi,
  'Socket.io':          IconBrandSocketIo,
  'Chart.js':           IconChartBar,
  'Three.js':           IconMap2,
  'Geolocation API':    IconMap2,
  'OpenWeatherMap API': IconApi,
  'CSS3':               IconApi,
};

const FILTER_TABS = ['All', 'EdTech', 'FinTech', 'Utility', 'Communication'];

const tagColors = {
  EdTech:        { bg: 'bg-blue-500/10',   border: 'border-blue-500/20',   text: 'text-blue-400'   },
  FinTech:       { bg: 'bg-green-500/10',  border: 'border-green-500/20',  text: 'text-green-400'  },
  Utility:       { bg: 'bg-sky-500/10',    border: 'border-sky-500/20',    text: 'text-sky-400'    },
  Communication: { bg: 'bg-orange-500/10', border: 'border-orange-500/20', text: 'text-orange-400' },
};

function ProjectCard({ project, index }) {
  const tagStyle = tagColors[project.tag] || { bg: 'bg-accent/10', border: 'border-accent/20', text: 'text-accent' };

  return (
    <motion.div
      layout
      variants={fadeUpVariant}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
      className="group relative bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-2xl overflow-hidden hover:border-white/15 transition-all duration-300 hover:shadow-card-hover flex flex-col"
    >
      {/* Gradient top bar */}
      <div className={`h-1 w-full bg-gradient-to-r ${project.gradient}`} />

      <div className="p-6 sm:p-7 flex flex-col flex-1">
        {/* Tag + Number */}
        <div className="flex items-center justify-between mb-5">
          <span className={`px-2.5 py-1 ${tagStyle.bg} border ${tagStyle.border} ${tagStyle.text} text-xs font-mono rounded-full`}>
            {project.tag}
          </span>
          <span className="text-[var(--color-text-secondary)] text-xs font-mono">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-space text-xl font-bold text-[var(--color-text-primary)] mb-3 group-hover:text-accent transition-colors duration-200">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Features */}
        <div className="mb-6 flex-1">
          <p className="text-[var(--color-text-secondary)] text-xs font-mono uppercase tracking-wider mb-3">
            Key Features
          </p>
          <ul className="space-y-2">
            {project.features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-[var(--color-text-muted)] text-sm">
                <IconCircleFilled size={6} className="text-accent mt-2 shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="mb-6">
          <p className="text-[var(--color-text-secondary)] text-xs font-mono uppercase tracking-wider mb-3">
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => {
              const TechIcon = techIcons[tech];
              return (
                <span
                  key={tech}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/5 border border-[var(--color-border)] text-[var(--color-text-muted)] text-xs font-mono rounded-lg hover:border-accent/30 hover:text-accent transition-all duration-200"
                >
                  {TechIcon && <TechIcon size={11} stroke={1.8} />}
                  {tech}
                </span>
              );
            })}
          </div>
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-4 border-t border-[var(--color-border)]">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-[var(--color-border)] hover:border-white/20 text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] text-xs font-medium rounded-lg transition-all duration-200"
          >
            <IconBrandGithub size={14} stroke={1.8} />
            Source
          </a>
          {project.live && project.live !== '#' && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent hover:bg-accent-hover text-white text-xs font-medium rounded-lg transition-all duration-200"
            >
              Live Demo
              <IconExternalLink size={13} stroke={2} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.tag === activeFilter);

  return (
    <PageLayout>
      {/* Header */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 border border-accent/20 rounded-full text-accent text-xs font-mono font-medium tracking-wider mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Projects
            </div>
            <h1 className="font-space text-4xl md:text-6xl font-bold text-[var(--color-text-primary)] leading-tight mb-6">
              Things I&apos;ve
              <br />
              <span className="text-accent">built</span>
            </h1>
            <p className="text-[var(--color-text-muted)] text-lg max-w-2xl leading-relaxed">
              A collection of full-stack projects spanning different domains — each built{' '}
              with attention to detail, performance, and user experience.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="pb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="flex items-center gap-2 flex-wrap">
              <div className="flex items-center gap-1.5 text-[var(--color-text-secondary)] text-xs font-mono mr-2">
                <IconFilter size={13} stroke={1.8} />
                Filter:
              </div>
              {FILTER_TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveFilter(tab)}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeFilter === tab
                      ? 'text-accent bg-accent/10 border border-accent/30'
                      : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] border border-transparent hover:border-[var(--color-border)] hover:bg-white/5'
                  }`}
                >
                  {tab}
                  {activeFilter === tab && (
                    <motion.span
                      layoutId="filter-pill"
                      className="absolute inset-0 rounded-lg ring-1 ring-accent/30"
                      transition={{ type: 'spring', duration: 0.3 }}
                    />
                  )}
                </button>
              ))}
              <span className="ml-auto text-[var(--color-text-secondary)] text-xs font-mono">
                {filtered.length} project{filtered.length !== 1 ? 's' : ''}
              </span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <AnimatePresence mode="popLayout">
            <motion.div
              layout
              className="grid md:grid-cols-2 gap-7"
            >
              {filtered.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 text-[var(--color-text-secondary)]"
            >
              No projects found for this filter.
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-[var(--color-border)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <FadeIn>
            <p className="text-[var(--color-text-muted)] mb-4">More projects on GitHub</p>
            <a
              href="https://github.com/manas-kasaudhan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--color-border)] hover:border-accent/50 text-[var(--color-text-primary)] hover:text-accent font-medium rounded-xl transition-all duration-200 hover:bg-accent/5 text-sm"
            >
              <IconBrandGithub size={18} stroke={1.8} />
              View GitHub Profile
              <IconArrowUpRight size={14} stroke={2} className="opacity-60" />
            </a>
          </FadeIn>
        </div>
      </section>
    </PageLayout>
  );
}
