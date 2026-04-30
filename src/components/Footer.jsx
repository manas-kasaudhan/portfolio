'use client';

import Link from 'next/link';
import { personal } from '@/data/portfolio';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconArrowUpRight,
} from '@tabler/icons-react';

const socials = [
  {
    label: 'GitHub',
    href: personal.github,
    Icon: IconBrandGithub,
    external: true,
  },
  {
    label: 'LinkedIn',
    href: personal.linkedin,
    Icon: IconBrandLinkedin,
    external: true,
  },
  {
    label: 'Email',
    href: `mailto:${personal.email}`,
    Icon: IconMail,
    external: false,
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-[#1e2023]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="w-7 h-7 rounded-lg bg-accent flex items-center justify-center font-space font-bold text-white text-xs">
              M
            </div>
            <span className="font-space font-semibold text-[#D8DADD] tracking-tight">
              Manas<span className="text-accent">.</span>
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2 flex-wrap justify-center">
            {socials.map(({ label, href, Icon, external }) => (
              <Link
                key={label}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[#5A6068] hover:text-accent hover:bg-white/5 text-sm transition-all duration-200"
              >
                <Icon size={15} stroke={1.8} />
                <span>{label}</span>
                {external && (
                  <IconArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                )}
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-[#5A6068] text-sm text-center sm:text-right">
            © {year} Manas Kasaudhan
          </p>
        </div>
      </div>
    </footer>
  );
}
