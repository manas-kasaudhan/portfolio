'use client';

import { createContext, useContext, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconCheck, IconX, IconAlertCircle } from '@tabler/icons-react';

const ToastContext = createContext(null);

let toastId = 0;

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback(({ type = 'success', title, message, duration = 5000 }) => {
    const id = ++toastId;
    setToasts((prev) => [...prev, { id, type, title, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, duration);
    return id;
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      {/* Toast Container */}
      <div
        aria-live="polite"
        aria-atomic="false"
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[200] flex flex-col gap-3 w-full max-w-sm px-4 pointer-events-none"
      >
        <AnimatePresence>
          {toasts.map((toast) => (
            <ToastItem key={toast.id} toast={toast} onRemove={removeToast} />
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

function ToastItem({ toast, onRemove }) {
  const isSuccess = toast.type === 'success';
  const Icon = isSuccess ? IconCheck : IconAlertCircle;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      role="alert"
      className={`pointer-events-auto flex items-start gap-3 w-full px-4 py-3.5 rounded-xl border backdrop-blur-md shadow-xl ${
        isSuccess
          ? 'bg-green-500/15 border-green-500/30 text-green-400'
          : 'bg-red-500/15 border-red-500/30 text-red-400'
      }`}
    >
      <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
        isSuccess ? 'bg-green-500/20' : 'bg-red-500/20'
      }`}>
        <Icon size={16} stroke={2} />
      </div>
      <div className="flex-1 min-w-0">
        {toast.title && (
          <p className="font-medium text-sm text-[#D8DADD] mb-0.5">{toast.title}</p>
        )}
        {toast.message && (
          <p className="text-xs text-[#D8DADD]/60 leading-relaxed">{toast.message}</p>
        )}
      </div>
      <button
        onClick={() => onRemove(toast.id)}
        className="shrink-0 text-[#5A6068] hover:text-[#D8DADD] transition-colors mt-0.5"
        aria-label="Dismiss notification"
      >
        <IconX size={14} />
      </button>
    </motion.div>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used inside ToastProvider');
  return ctx;
}
