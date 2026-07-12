'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconArrowUp } from '@tabler/icons-react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-8 right-6 z-50 flex items-center justify-center w-11 h-11 rounded-xl bg-accent hover:bg-accent-hover text-white shadow-lg hover:shadow-accent transition-all duration-200 hover:scale-110"
        >
          <IconArrowUp size={18} stroke={2} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
