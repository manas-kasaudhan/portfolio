'use client';

import { motion } from 'framer-motion';
import { personal, experience, education, skills } from '@/data/portfolio';
import PageLayout from '@/components/PageLayout';
import { FadeIn } from '@/components/AnimateInView';
import {
  IconDownload,
  IconExternalLink,
  IconBriefcase,
  IconSchool,
  IconCode,
  IconCalendar,
  IconMapPin,
  IconCircleFilled,
} from '@tabler/icons-react';

const SKILL_CATEGORIES = Object.entries(skills);

export default function ResumePage() {
  return (
    <PageLayout>
      {/* Header */}
      <section className="relative pt-32 pb-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 border border-accent/20 rounded-full text-accent text-xs font-mono font-medium tracking-wider mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Resume
            </div>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
              <div>
                <h1 className="font-space text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] leading-tight mb-3">
                  My <span className="text-accent">Resume</span>
                </h1>
                <p className="text-[var(--color-text-muted)] max-w-md leading-relaxed">
                  A snapshot of my experience, skills, and education. Download or view the full PDF.
                </p>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-3 shrink-0">
                <a
                  href={personal.resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-[var(--color-border)] hover:border-accent/40 text-[var(--color-text-primary)] hover:text-accent rounded-xl text-sm font-medium transition-all duration-200 hover:bg-accent/5"
                >
                  <IconExternalLink size={16} stroke={1.8} />
                  Open PDF
                </a>
                <a
                  href={personal.resumePath}
                  download="Manas_Kasaudhan_Resume.pdf"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent hover:bg-accent-hover text-white rounded-xl text-sm font-medium transition-all duration-200 hover:shadow-accent hover:scale-105"
                >
                  <IconDownload size={16} stroke={2} />
                  Download Resume
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Resume Preview Card */}
      <section className="pb-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-3 gap-8 items-start">

            {/* Left: Snapshot card */}
            <FadeIn direction="right" className="lg:col-span-1">
              <div className="sticky top-28 bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-2xl overflow-hidden">
                {/* Card header */}
                <div className="h-1.5 w-full bg-gradient-to-r from-accent to-orange-400" />
                <div className="p-6">
                  {/* Avatar placeholder */}
                  <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center font-space font-bold text-white text-2xl mb-4">
                    M
                  </div>
                  <h2 className="font-space text-xl font-bold text-[var(--color-text-primary)] mb-1">
                    {personal.name}
                  </h2>
                  <p className="text-accent text-sm font-medium mb-3">{personal.title}</p>
                  <p className="text-[var(--color-text-muted)] text-xs leading-relaxed mb-5">
                    {personal.bio}
                  </p>

                  <div className="space-y-2 text-xs text-[var(--color-text-secondary)]">
                    <div className="flex items-center gap-2">
                      <IconMapPin size={13} stroke={1.8} />
                      {personal.location}
                    </div>
                    <a href={`mailto:${personal.email}`} className="flex items-center gap-2 hover:text-accent transition-colors">
                      <IconCode size={13} stroke={1.8} />
                      {personal.email}
                    </a>
                  </div>

                  <div className="mt-6 flex flex-col gap-2">
                    <a
                      href={personal.resumePath}
                      download="Manas_Kasaudhan_Resume.pdf"
                      className="flex items-center justify-center gap-2 px-4 py-2.5 bg-accent hover:bg-accent-hover text-white rounded-xl text-sm font-medium transition-all duration-200 w-full"
                    >
                      <IconDownload size={15} stroke={2} />
                      Download CV
                    </a>
                    <a
                      href={personal.resumePath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-2.5 border border-[var(--color-border)] hover:border-accent/40 text-[var(--color-text-primary)] hover:text-accent rounded-xl text-sm font-medium transition-all duration-200 w-full"
                    >
                      <IconExternalLink size={15} stroke={1.8} />
                      Open in New Tab
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Right: Resume content */}
            <div className="lg:col-span-2 space-y-8">

              {/* ─── Experience ─── */}
              <FadeIn delay={0.1}>
                <div className="bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-2xl p-6 sm:p-7">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                      <IconBriefcase size={16} className="text-accent" stroke={1.8} />
                    </div>
                    <h3 className="font-space text-lg font-bold text-[var(--color-text-primary)]">Experience</h3>
                  </div>

                  <div className="space-y-6">
                    {experience.map((exp, i) => (
                      <div key={exp.id} className={`relative pl-6 ${i < experience.length - 1 ? 'pb-6 border-b border-[var(--color-border)]' : ''}`}>
                        {/* Timeline dot */}
                        <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-accent" />
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                          <div>
                            <p className="font-space font-semibold text-[var(--color-text-primary)] text-sm">{exp.role}</p>
                            <p className="text-accent text-xs font-medium">{exp.company}</p>
                          </div>
                          <div className="text-right shrink-0">
                            <div className="flex items-center gap-1.5 text-[var(--color-text-secondary)] text-xs justify-end">
                              <IconCalendar size={11} stroke={1.8} />
                              {exp.duration}
                            </div>
                            <div className="flex items-center gap-1.5 text-[var(--color-text-secondary)] text-xs justify-end mt-0.5">
                              <IconMapPin size={11} stroke={1.8} />
                              {exp.location}
                            </div>
                          </div>
                        </div>
                        <ul className="space-y-1.5 mb-3">
                          {exp.achievements.slice(0, 3).map((a) => (
                            <li key={a} className="flex items-start gap-2 text-[var(--color-text-muted)] text-xs leading-relaxed">
                              <IconCircleFilled size={4} className="text-accent mt-1.5 shrink-0" />
                              {a}
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-1.5">
                          {exp.tech.map((t) => (
                            <span key={t} className="px-2 py-0.5 bg-white/5 border border-[var(--color-border)] text-[var(--color-text-secondary)] text-xs font-mono rounded">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>

              {/* ─── Education ─── */}
              <FadeIn delay={0.2}>
                <div className="bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-2xl p-6 sm:p-7">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                      <IconSchool size={16} className="text-accent" stroke={1.8} />
                    </div>
                    <h3 className="font-space text-lg font-bold text-[var(--color-text-primary)]">Education</h3>
                  </div>

                  <div className="space-y-4">
                    {education.map((edu, i) => (
                      <div key={i} className={`relative pl-6 ${i < education.length - 1 ? 'pb-4 border-b border-[var(--color-border)]' : ''}`}>
                        <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-accent" />
                        <p className="font-space font-semibold text-[var(--color-text-primary)] text-sm">{edu.degree}</p>
                        <p className="text-accent text-xs font-medium mb-1">{edu.institution}</p>
                        <div className="flex items-center gap-1.5 text-[var(--color-text-secondary)] text-xs">
                          <IconCalendar size={11} stroke={1.8} />
                          {edu.duration}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>

              {/* ─── Skills ─── */}
              <FadeIn delay={0.3}>
                <div className="bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-2xl p-6 sm:p-7">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                      <IconCode size={16} className="text-accent" stroke={1.8} />
                    </div>
                    <h3 className="font-space text-lg font-bold text-[var(--color-text-primary)]">Technical Skills</h3>
                  </div>

                  <div className="space-y-4">
                    {SKILL_CATEGORIES.map(([category, items]) => (
                      <div key={category}>
                        <p className="text-[var(--color-text-secondary)] text-xs font-mono uppercase tracking-wider mb-2">{category}</p>
                        <div className="flex flex-wrap gap-2">
                          {items.map((skill) => (
                            <span
                              key={skill}
                              className="px-2.5 py-1 bg-white/5 border border-[var(--color-border)] text-[var(--color-text-muted)] text-xs font-mono rounded-lg hover:border-accent/30 hover:text-accent transition-all duration-200"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>

            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
