'use client';

import { motion } from 'framer-motion';
import { personal, skills, education } from '@/data/portfolio';
import PageLayout from '@/components/PageLayout';
import { FadeIn, StaggerContainer, fadeUpVariant } from '@/components/AnimateInView';
import { ButtonPrimary, ButtonOutline } from '@/components/UI';
import {
  IconCode,
  IconLayout,
  IconServer,
  IconDatabase,
  IconTool,
  IconBrandJavascript,
  IconBrandTypescript,
  IconBrandPython,
  IconBrandCpp,
  IconBrandReact,
  IconBrandNextjs,
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandTailwind,
  IconBrandRedux,
  IconBrandNodejs,
  IconApi,
  IconBrandGraphql,
  IconKey,
  IconBrandSocketIo,
  IconBrandMongodb,
  IconBrandMysql,
  IconBrandGit,
  IconBrandGithub,
  IconBrandDocker,
  IconBrandVscode,
  IconBrandFigma,
  IconCloud,
  IconTerminal2,
  IconSchool,
  IconMapPin,
  IconBriefcase,
  IconAt,
  IconCircleDot,
} from '@tabler/icons-react';

// Per-category header icons
const categoryConfig = {
  Languages: {
    Icon: IconCode,
    gradient: 'from-blue-500/10 to-blue-600/5',
    border: 'border-blue-500/20',
    accent: 'text-blue-400',
    bg: 'bg-blue-400/10',
  },
  Frontend: {
    Icon: IconLayout,
    gradient: 'from-purple-500/10 to-purple-600/5',
    border: 'border-purple-500/20',
    accent: 'text-purple-400',
    bg: 'bg-purple-400/10',
  },
  Backend: {
    Icon: IconServer,
    gradient: 'from-green-500/10 to-green-600/5',
    border: 'border-green-500/20',
    accent: 'text-green-400',
    bg: 'bg-green-400/10',
  },
  Databases: {
    Icon: IconDatabase,
    gradient: 'from-yellow-500/10 to-yellow-600/5',
    border: 'border-yellow-500/20',
    accent: 'text-yellow-400',
    bg: 'bg-yellow-400/10',
  },
  Tools: {
    Icon: IconTool,
    gradient: 'from-pink-500/10 to-pink-600/5',
    border: 'border-pink-500/20',
    accent: 'text-pink-400',
    bg: 'bg-pink-400/10',
  },
};

// Per-skill icons
const skillIcons = {
  // Languages
  'JavaScript':  IconBrandJavascript,
  'TypeScript':  IconBrandTypescript,
  'Python':      IconBrandPython,
  'Java':        IconCode,
  'C++':         IconBrandCpp,
  'SQL':         IconDatabase,
  // Frontend
  'React.js':    IconBrandReact,
  'Next.js':     IconBrandNextjs,
  'HTML5':       IconBrandHtml5,
  'CSS3':        IconBrandCss3,
  'Tailwind CSS':IconBrandTailwind,
  'Redux':       IconBrandRedux,
  'Framer Motion': IconLayout,
  // Backend
  'Node.js':     IconBrandNodejs,
  'Express.js':  IconServer,
  'REST APIs':   IconApi,
  'GraphQL':     IconBrandGraphql,
  'JWT Auth':    IconKey,
  'Socket.io':   IconBrandSocketIo,
  // Databases
  'MongoDB':     IconBrandMongodb,
  'PostgreSQL':  IconDatabase,
  'MySQL':       IconBrandMysql,
  'Redis':       IconDatabase,
  'Mongoose':    IconDatabase,
  // Tools
  'Git':         IconBrandGit,
  'GitHub':      IconBrandGithub,
  'Docker':      IconBrandDocker,
  'VS Code':     IconBrandVscode,
  'Postman':     IconApi,
  'Figma':       IconBrandFigma,
  'Vercel':      IconCloud,
  'Linux':       IconTerminal2,
};

export default function AboutPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 border border-accent/20 rounded-full text-accent text-xs font-mono font-medium tracking-wider mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              About Me
            </div>
            <h1 className="font-space text-4xl md:text-6xl font-bold text-[#D8DADD] leading-tight mb-6">
              The person behind
              <br />
              <span className="text-accent">the code</span>
            </h1>
            <p className="text-[#D8DADD]/60 text-lg max-w-2xl leading-relaxed">
              I&apos;m a full-stack developer who cares deeply about writing clean,{' '}
              meaningful code. Here&apos;s a bit about my journey, what I work with,{' '}
              and how I approach problems.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Bio Section */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-3 gap-10 md:gap-16">
            {/* Long bio */}
            <FadeIn direction="right" className="md:col-span-2">
              <div className="prose prose-invert max-w-none">
                <h2 className="font-space text-2xl font-bold text-[#D8DADD] mb-6">
                  A bit about me
                </h2>
                <div className="space-y-4 text-[#D8DADD]/65 leading-relaxed">
                  {personal.longBio.split('\n\n').map((para, i) => (
                    <p key={i}>{para.trim()}</p>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Quick info card */}
            <FadeIn direction="left" delay={0.2}>
              <div className="bg-white/3 border border-white/8 rounded-2xl p-6 h-fit">
                <h3 className="font-space font-semibold text-[#D8DADD] mb-5 text-xs tracking-widest uppercase text-[#5A6068]">
                  Quick Info
                </h3>
                <div className="space-y-4">
                  {[
                    { label: 'Location', value: personal.location, Icon: IconMapPin },
                    { label: 'Role',     value: personal.title,    Icon: IconBriefcase },
                    { label: 'Email',    value: personal.email,    Icon: IconAt,    isEmail: true },
                    { label: 'Status',   value: 'Open to work',    Icon: IconCircleDot, isStatus: true },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center shrink-0 mt-0.5">
                        <item.Icon size={14} className="text-accent" stroke={1.8} />
                      </div>
                      <div>
                        <span className="text-[#5A6068] text-xs font-mono uppercase tracking-wider block mb-0.5">
                          {item.label}
                        </span>
                        {item.isEmail ? (
                          <a
                            href={`mailto:${item.value}`}
                            className="text-[#D8DADD]/80 text-sm hover:text-accent transition-colors break-all"
                          >
                            {item.value}
                          </a>
                        ) : item.isStatus ? (
                          <span className="inline-flex items-center gap-1.5 text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                            <span className="text-green-400">{item.value}</span>
                          </span>
                        ) : (
                          <span className="text-[#D8DADD]/80 text-sm">{item.value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-white/8 flex flex-col gap-3">
                  <ButtonPrimary href="/contact" className="w-full justify-center">
                    Get in touch
                  </ButtonPrimary>
                  <ButtonOutline href={personal.github} external className="w-full justify-center">
                    GitHub Profile
                  </ButtonOutline>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 border border-accent/20 rounded-full text-accent text-xs font-mono font-medium tracking-wider mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Skills &amp; Technologies
            </div>
            <h2 className="font-space text-3xl md:text-4xl font-bold text-[#D8DADD] mb-14">
              What I work with
            </h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => {
              const cfg = categoryConfig[category];
              const CatIcon = cfg.Icon;
              return (
                <motion.div
                  key={category}
                  variants={fadeUpVariant}
                  className={`bg-gradient-to-br ${cfg.gradient} border ${cfg.border} rounded-2xl p-6 group hover:scale-[1.02] transition-transform duration-300`}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-9 h-9 rounded-xl ${cfg.bg} flex items-center justify-center`}>
                      <CatIcon size={18} className={cfg.accent} stroke={1.8} />
                    </div>
                    <h3 className="font-space font-semibold text-[#D8DADD] text-base">
                      {category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => {
                      const SkillIcon = skillIcons[skill];
                      return (
                        <span
                          key={skill}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-white/5 border border-white/10 text-[#D8DADD]/80 text-xs font-mono rounded-lg hover:border-accent/40 hover:text-accent transition-all duration-200 cursor-default"
                        >
                          {SkillIcon && <SkillIcon size={12} stroke={1.8} />}
                          {skill}
                        </span>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 border border-accent/20 rounded-full text-accent text-xs font-mono font-medium tracking-wider mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Education
            </div>
            <h2 className="font-space text-3xl md:text-4xl font-bold text-[#D8DADD] mb-14">
              Academic Background
            </h2>
          </FadeIn>

          <StaggerContainer className="space-y-6">
            {education.map((edu) => (
              <motion.div
                key={edu.degree}
                variants={fadeUpVariant}
                className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-white/3 border border-white/8 rounded-2xl hover:border-accent/30 hover:bg-accent/3 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-accent/15 flex items-center justify-center mt-0.5 shrink-0 group-hover:bg-accent/25 transition-colors">
                    <IconSchool size={20} className="text-accent" stroke={1.8} />
                  </div>
                  <div>
                    <h3 className="font-space font-semibold text-[#D8DADD] text-base mb-1 group-hover:text-accent transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-[#D8DADD]/60 text-sm">{edu.institution}</p>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 md:text-right pl-[60px] md:pl-0">
                  <span className="text-accent font-mono text-sm font-medium">{edu.grade}</span>
                  <p className="text-[#5A6068] text-xs mt-1">{edu.duration}</p>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </PageLayout>
  );
}
