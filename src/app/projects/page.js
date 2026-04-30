'use client';

import { motion } from 'framer-motion';
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
} from '@tabler/icons-react';

const techIcons = {
  'React.js':             IconBrandReact,
  'Next.js':              IconBrandNextjs,
  'Node.js':              IconBrandNodejs,
  'TypeScript':           IconBrandTypescript,
  'MongoDB':              IconBrandMongodb,
  'PostgreSQL':           IconDatabase,
  'MySQL':                IconDatabase,
  'Tailwind CSS':         IconBrandTailwind,
  'Express.js':           IconServer,
  'REST APIs':            IconApi,
  'Socket.io':            IconBrandSocketIo,
  'Chart.js':             IconChartBar,
  'Three.js':             IconMap2,
  'Geolocation API':      IconMap2,
  'OpenWeatherMap API':   IconApi,
  'CSS3':                 IconApi,
};

function ProjectCard({ project, index }) {
  return (
    <motion.div
      variants={fadeUpVariant}
      className="group relative bg-white/3 border border-white/8 rounded-2xl overflow-hidden hover:border-white/15 transition-all duration-300 hover:shadow-card-hover flex flex-col"
    >
      {/* Card header gradient */}
      <div className={`h-1.5 w-full bg-gradient-to-r ${project.gradient} border-b border-white/5`} />

      <div className="p-6 sm:p-7 flex flex-col flex-1">
        {/* Tag + Number */}
        <div className="flex items-center justify-between mb-5">
          <span className="px-2.5 py-1 bg-accent/10 border border-accent/20 text-accent text-xs font-mono rounded-full">
            {project.tag}
          </span>
          <span className="text-[#5A6068] text-xs font-mono">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-space text-xl font-bold text-[#D8DADD] mb-3 group-hover:text-accent transition-colors duration-200">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-[#D8DADD]/55 text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Features */}
        <div className="mb-6 flex-1">
          <p className="text-[#5A6068] text-xs font-mono uppercase tracking-wider mb-3">
            Key Features
          </p>
          <ul className="space-y-2">
            {project.features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-[#D8DADD]/60 text-sm">
                <IconCircleFilled size={6} className="text-accent mt-2 shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="mb-6">
          <p className="text-[#5A6068] text-xs font-mono uppercase tracking-wider mb-3">
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => {
              const TechIcon = techIcons[tech];
              return (
                <span
                  key={tech}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/5 border border-white/10 text-[#D8DADD]/70 text-xs font-mono rounded-lg hover:border-accent/30 hover:text-accent transition-all duration-200"
                >
                  {TechIcon && <TechIcon size={11} stroke={1.8} />}
                  {tech}
                </span>
              );
            })}
          </div>
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-4 border-t border-white/8">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-[#D8DADD]/80 hover:text-[#D8DADD] text-xs font-medium rounded-lg transition-all duration-200"
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
              <IconArrowUpRight size={14} stroke={2} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsPage() {
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
            <h1 className="font-space text-4xl md:text-6xl font-bold text-[#D8DADD] leading-tight mb-6">
              Things I&apos;ve
              <br />
              <span className="text-accent">built</span>
            </h1>
            <p className="text-[#D8DADD]/60 text-lg max-w-2xl leading-relaxed">
              A collection of full-stack projects spanning different domains — each built{' '}
              with attention to detail, performance, and user experience.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <StaggerContainer className="grid md:grid-cols-2 gap-7">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <FadeIn>
            <p className="text-[#D8DADD]/60 mb-4">More projects on GitHub</p>
            <a
              href="https://github.com/manas-kasaudhan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/15 hover:border-accent/50 text-[#D8DADD] hover:text-accent font-medium rounded-xl transition-all duration-200 hover:bg-accent/5 text-sm"
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
