'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { IconSun, IconMoon } from '@tabler/icons-react';
import { useTheme } from './ThemeProvider';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="relative flex items-center justify-center w-9 h-9 rounded-lg border border-white/10 hover:border-accent/40 bg-white/5 hover:bg-accent/10 text-[#D8DADD] hover:text-accent transition-all duration-200"
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.span
            key="sun"
            initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2 }}
          >
            <IconSun size={16} stroke={1.8} />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2 }}
          >
            <IconMoon size={16} stroke={1.8} />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
