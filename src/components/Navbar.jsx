'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks, personal } from '@/data/portfolio';
import ThemeToggle from '@/components/ThemeToggle';
import {
  IconHome,
  IconUser,
  IconFolderCode,
  IconBriefcase,
  IconMail,
  IconFileText,
  IconMenu2,
  IconX,
  IconBrandGithub,
  IconBrandLinkedin,
  IconCode,
  IconDownload,
} from '@tabler/icons-react';

const navIcons = {
  '/':           IconHome,
  '/about':      IconUser,
  '/projects':   IconFolderCode,
  '/experience': IconBriefcase,
  '/resume':     IconFileText,
  '/contact':    IconMail,
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[var(--color-bg-primary)]/95 backdrop-blur-md border-b border-[var(--color-border)] shadow-xl navbar-scrolled'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center font-space font-bold text-white text-sm group-hover:scale-110 transition-transform duration-200">
              M
            </div>
            <span className="font-space font-semibold text-[var(--color-text-primary)] text-lg tracking-tight">
              Manas<span className="text-accent">.</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const NavIcon = navIcons[link.href];
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-accent'
                      : 'text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-white/5 rounded-lg"
                      transition={{ type: 'spring', duration: 0.4 }}
                    />
                  )}
                  {NavIcon && <NavIcon size={14} stroke={1.8} className="relative z-10" />}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Right: Theme Toggle + Social + Hire Me */}
          <div className="flex items-center gap-2">
            {/* Social icons — desktop only */}
            <div className="hidden lg:flex items-center gap-1">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex items-center justify-center w-8 h-8 rounded-lg text-[var(--color-text-secondary)] hover:text-accent hover:bg-accent/10 transition-all duration-200"
              >
                <IconBrandGithub size={16} stroke={1.8} />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex items-center justify-center w-8 h-8 rounded-lg text-[var(--color-text-secondary)] hover:text-accent hover:bg-accent/10 transition-all duration-200"
              >
                <IconBrandLinkedin size={16} stroke={1.8} />
              </a>
              <a
                href={personal.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode"
                className="flex items-center justify-center w-8 h-8 rounded-lg text-[var(--color-text-secondary)] hover:text-accent hover:bg-accent/10 transition-all duration-200"
              >
                <IconCode size={16} stroke={1.8} />
              </a>
            </div>

            <div className="hidden md:block w-px h-5 bg-[var(--color-border)]" />

            <ThemeToggle />

            {/* Resume Download */}
            <a
              href={personal.resumePath}
              download="Manas_Kasaudhan_Resume.pdf"
              aria-label="Download Resume"
              className="hidden md:flex items-center gap-1.5 px-3 py-2 bg-accent/10 hover:bg-accent/20 border border-accent/20 hover:border-accent/40 text-accent rounded-lg text-sm font-medium transition-all duration-200"
            >
              <IconDownload size={14} stroke={2} />
              Resume
            </a>

            {/* Hire Me */}
            <Link
              href="/contact"
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-accent hover:bg-accent-hover text-white rounded-lg text-sm font-medium transition-all duration-200 hover:shadow-accent hover:scale-105"
            >
              <IconMail size={14} stroke={2} />
              Hire Me
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg hover:bg-white/5 transition-colors text-[var(--color-text-primary)]"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <AnimatePresence mode="wait" initial={false}>
                {menuOpen ? (
                  <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <IconX size={20} />
                  </motion.span>
                ) : (
                  <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <IconMenu2 size={20} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[73px] left-0 right-0 z-40 bg-[var(--color-bg-primary)]/98 backdrop-blur-md border-b border-[var(--color-border)] md:hidden mobile-menu-bg"
          >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => {
                const NavIcon = navIcons[link.href];
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                        pathname === link.href
                          ? 'text-accent bg-accent/10'
                          : 'text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] hover:bg-white/5'
                      }`}
                    >
                      {NavIcon && <NavIcon size={16} stroke={1.8} />}
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}

              {/* Mobile social + actions */}
              <div className="flex items-center gap-2 px-4 py-3 mt-1 border-t border-[var(--color-border)]">
                <a href={personal.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                  className="flex items-center justify-center w-9 h-9 rounded-lg text-[var(--color-text-secondary)] hover:text-accent hover:bg-accent/10 transition-all duration-200">
                  <IconBrandGithub size={18} stroke={1.8} />
                </a>
                <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                  className="flex items-center justify-center w-9 h-9 rounded-lg text-[var(--color-text-secondary)] hover:text-accent hover:bg-accent/10 transition-all duration-200">
                  <IconBrandLinkedin size={18} stroke={1.8} />
                </a>
                <a href={personal.leetcode} target="_blank" rel="noopener noreferrer" aria-label="LeetCode"
                  className="flex items-center justify-center w-9 h-9 rounded-lg text-[var(--color-text-secondary)] hover:text-accent hover:bg-accent/10 transition-all duration-200">
                  <IconCode size={18} stroke={1.8} />
                </a>
              </div>

              <div className="flex gap-2 px-4 pb-3">
                <a
                  href={personal.resumePath}
                  download="Manas_Kasaudhan_Resume.pdf"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-accent/10 border border-accent/20 text-accent rounded-lg text-sm font-medium transition-all"
                >
                  <IconDownload size={15} stroke={2} />
                  Download Resume
                </a>
                <Link
                  href="/contact"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-accent text-white rounded-lg text-sm font-medium transition-all"
                >
                  <IconMail size={15} stroke={2} />
                  Hire Me
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
