'use client';

import Link from 'next/link';
import { personal } from '@/data/portfolio';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconArrowUpRight,
  IconCode,
  IconDownload,
  IconHeart,
  IconBrandReact,
} from '@tabler/icons-react';

const socials = [
  { label: 'GitHub',   href: personal.github,              Icon: IconBrandGithub,   external: true  },
  { label: 'LinkedIn', href: personal.linkedin,             Icon: IconBrandLinkedin, external: true  },
  { label: 'LeetCode', href: personal.leetcode,             Icon: IconCode,          external: true  },
  { label: 'Email',    href: `mailto:${personal.email}`,    Icon: IconMail,          external: false },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg-secondary)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-start">

          {/* Brand */}
          <div>
            <Link href="/" className="group inline-flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center font-space font-bold text-white text-sm group-hover:scale-110 transition-transform duration-200">
                M
              </div>
              <span className="font-space font-semibold text-[var(--color-text-primary)] tracking-tight text-lg">
                Manas<span className="text-accent">.</span>
              </span>
            </Link>
            <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed max-w-xs">
              Full-Stack Developer building fast, clean, and scalable web applications.
            </p>
            <div className="flex items-center gap-1.5 mt-4 text-[var(--color-text-secondary)] text-xs">
              <span>Made with</span>
              <IconHeart size={12} className="text-red-400 fill-red-400" />
              <span>using</span>
              <IconBrandReact size={13} className="text-sky-400" />
              <span className="text-[var(--color-text-primary)] font-medium">React</span>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <p className="text-[var(--color-text-secondary)] text-xs font-mono uppercase tracking-wider mb-4">Connect</p>
            <div className="flex flex-col gap-2">
              {socials.map(({ label, href, Icon, external }) => (
                <Link
                  key={label}
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  className="group inline-flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-accent text-sm transition-all duration-200"
                >
                  <Icon size={14} stroke={1.8} />
                  <span>{label}</span>
                  {external && (
                    <IconArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Resume Download */}
          <div>
            <p className="text-[var(--color-text-secondary)] text-xs font-mono uppercase tracking-wider mb-4">Resume</p>
            <a
              href={personal.resumePath}
              download="Manas_Kasaudhan_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-accent/10 hover:bg-accent/20 border border-accent/20 hover:border-accent/40 text-accent rounded-xl text-sm font-medium transition-all duration-200 hover:shadow-accent mb-3"
            >
              <IconDownload size={15} stroke={2} />
              Download CV
            </a>
            <p className="text-[var(--color-text-secondary)] text-xs mt-2">
              Available for full-time roles & freelance projects.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[var(--color-text-secondary)] text-sm">
            © {year} Manas Kasaudhan. All rights reserved.
          </p>
          <p className="text-[var(--color-text-secondary)] text-xs">
            Designed & built with passion 🔥
          </p>
        </div>
      </div>
    </footer>
  );
}
