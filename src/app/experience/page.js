'use client';

import { motion } from 'framer-motion';
import { experience } from '@/data/portfolio';
import PageLayout from '@/components/PageLayout';
import { FadeIn, StaggerContainer, fadeUpVariant } from '@/components/AnimateInView';
import { ButtonPrimary } from '@/components/UI';
import {
  IconBrandReact,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandTypescript,
  IconBrandMongodb,
  IconDatabase,
  IconBrandTailwind,
  IconServer,
  IconBrandGit,
  IconBrandFigma,
  IconApi,
  IconBrandSocketIo,
  IconKey,
  IconBrandGraphql,
  IconBrandCss3,
  IconBrandRedux,
  IconCircleCheckFilled,
  IconBriefcase,
  IconUsers,
  IconTrendingUp,
  IconShieldCheck,
} from '@tabler/icons-react';

// Map tech names to icons
const techIcons = {
  'React.js':    IconBrandReact,
  'Next.js':     IconBrandNextjs,
  'Node.js':     IconBrandNodejs,
  'TypeScript':  IconBrandTypescript,
  'MongoDB':     IconBrandMongodb,
  'PostgreSQL':  IconDatabase,
  'MySQL':       IconDatabase,
  'Redis':       IconDatabase,
  'Tailwind CSS':IconBrandTailwind,
  'Express.js':  IconServer,
  'Git':         IconBrandGit,
  'GitHub':      IconBrandGit,
  'Figma':       IconBrandFigma,
  'REST APIs':   IconApi,
  'Socket.io':   IconBrandSocketIo,
  'JWT Auth':    IconKey,
  'GraphQL':     IconBrandGraphql,
  'CSS3':        IconBrandCss3,
  'Redux':       IconBrandRedux,
};

const impactMetrics = [
  { metric: '2',    desc: 'Companies worked with',    Icon: IconBriefcase },
  { metric: '10K+', desc: 'Daily API requests served', Icon: IconTrendingUp },
  { metric: '500+', desc: 'Active SaaS users supported',Icon: IconUsers },
  { metric: '68%',  desc: 'Test coverage achieved',    Icon: IconShieldCheck },
];

export default function ExperiencePage() {
  return (
    <PageLayout>
      {/* Header */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 border border-accent/20 rounded-full text-accent text-xs font-mono font-medium tracking-wider mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Experience
            </div>
            <h1 className="font-space text-4xl md:text-6xl font-bold text-[#D8DADD] leading-tight mb-6">
              My professional
              <br />
              <span className="text-accent">journey</span>
            </h1>
            <p className="text-[#D8DADD]/60 text-lg max-w-2xl leading-relaxed">
              Real-world experience working on production codebases, collaborating{' '}
              with teams, and delivering measurable impact.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Timeline */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="relative">
            {/* Timeline vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/30 to-transparent hidden md:block" />

            <StaggerContainer className="space-y-8">
              {experience.map((exp) => (
                <motion.div
                  key={exp.id}
                  variants={fadeUpVariant}
                  className="md:pl-20 relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 top-6 w-4 h-4 rounded-full bg-accent border-4 border-[#2B2D31] hidden md:block z-10" />

                  {/* Card */}
                  <div className="bg-white/3 border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-accent/25 hover:bg-accent/3 transition-all duration-300 group">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                      <div className="flex items-start gap-4">
                        {/* Company icon */}
                        <div className="w-11 h-11 rounded-xl bg-accent/15 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                          <span className="text-accent font-bold font-space text-sm">
                            {exp.companyInitial || exp.company[0]}
                          </span>
                        </div>
                        <div>
                          <h2 className="font-space text-lg sm:text-xl font-bold text-[#D8DADD] mb-1 group-hover:text-accent transition-colors">
                            {exp.role}
                          </h2>
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-accent font-medium text-sm">{exp.company}</span>
                            <span className="text-[#5A6068]">·</span>
                            <span className="text-[#5A6068] text-sm">{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Duration badge */}
                      <div className="flex flex-col items-start lg:items-end gap-2 shrink-0">
                        <div className="flex items-center gap-2 flex-wrap justify-end">
                          <span className="inline-flex items-center px-3 py-1 bg-accent/10 border border-accent/20 text-accent text-xs font-mono rounded-full">
                            {exp.type}
                          </span>
                          {exp.duration.includes('Present') && (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-400/10 border border-green-400/25 text-green-400 text-xs font-mono rounded-full">
                              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                              Current
                            </span>
                          )}
                        </div>
                        <span className="text-[#5A6068] text-sm font-mono">{exp.duration}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-[#D8DADD]/60 text-sm leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <p className="text-[#5A6068] text-xs font-mono uppercase tracking-wider mb-4">
                        Key Achievements
                      </p>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}
                            className="flex items-start gap-3 text-[#D8DADD]/70 text-sm"
                          >
                            <IconCircleCheckFilled
                              size={17}
                              className="text-accent shrink-0 mt-0.5"
                            />
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech used */}
                    <div className="pt-5 border-t border-white/8">
                      <p className="text-[#5A6068] text-xs font-mono uppercase tracking-wider mb-3">
                        Technologies Used
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech) => {
                          const TechIcon = techIcons[tech];
                          return (
                            <span
                              key={tech}
                              className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 text-[#D8DADD]/70 text-xs font-mono rounded-lg hover:border-accent/40 hover:text-accent transition-all duration-200"
                            >
                              {TechIcon && <TechIcon size={12} stroke={1.8} />}
                              {tech}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Impact metrics */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <h2 className="font-space text-2xl font-bold text-[#D8DADD] text-center mb-12">
              Impact by the numbers
            </h2>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {impactMetrics.map(({ metric, desc, Icon }) => (
              <motion.div
                key={metric}
                variants={fadeUpVariant}
                className="p-6 bg-white/3 border border-white/8 rounded-2xl text-center hover:border-accent/30 hover:bg-accent/3 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-accent/20 transition-colors">
                  <Icon size={20} className="text-accent" stroke={1.8} />
                </div>
                <div className="font-space text-3xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform">
                  {metric}
                </div>
                <div className="text-[#5A6068] text-sm">{desc}</div>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="bg-gradient-to-br from-accent/10 to-transparent border border-accent/20 rounded-2xl p-8 sm:p-10 text-center">
              <h2 className="font-space text-2xl md:text-3xl font-bold text-[#D8DADD] mb-4">
                Looking to work together?
              </h2>
              <p className="text-[#D8DADD]/60 mb-8 max-w-md mx-auto">
                I&apos;m open to full-time roles and freelance opportunities.{' '}
                Let&apos;s build something great.
              </p>
              <ButtonPrimary href="/contact">
                Get in Touch
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </ButtonPrimary>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageLayout>
  );
}
