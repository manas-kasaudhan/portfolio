'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personal } from '@/data/portfolio';
import PageLayout from '@/components/PageLayout';
import { FadeIn } from '@/components/AnimateInView';
import { useEmailJS } from '@/hooks/useEmailJS';
import { useToast } from '@/components/Toast';
import {
  IconMail,
  IconBrandLinkedin,
  IconBrandGithub,
  IconArrowUpRight,
  IconSend,
  IconCheck,
  IconLoader2,
  IconClock,
  IconUser,
  IconMessage,
  IconAlertCircle,
} from '@tabler/icons-react';

// ─── Email validation ─────────────────────────────────────────────────
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate({ name, email, subject, message }) {
  if (!name.trim() || name.trim().length < 2)
    return 'Please enter your full name (at least 2 characters).';
  if (!EMAIL_RE.test(email.trim()))
    return 'Please enter a valid email address.';
  if (!subject.trim() || subject.trim().length < 3)
    return 'Subject must be at least 3 characters.';
  if (!message.trim() || message.trim().length < 20)
    return 'Message must be at least 20 characters.';
  return null;
}

// ─── Input Field ──────────────────────────────────────────────────────
function InputField({ label, id, type = 'text', placeholder, required, value, onChange, error, icon: Icon }) {
  return (
    <div>
      <label htmlFor={id} className="block text-[var(--color-text-muted)] text-sm font-medium mb-2">
        {Icon && <Icon size={13} className="inline mr-1.5 opacity-60" stroke={1.8} />}
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-[var(--color-text-primary)] placeholder-[var(--color-text-secondary)] text-sm focus:outline-none focus:bg-accent/5 transition-all duration-200 ${
          error
            ? 'border-red-500/60 focus:border-red-500'
            : 'border-[var(--color-border)] focus:border-accent/60'
        }`}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-red-400 text-xs flex items-center gap-1">
          <IconAlertCircle size={12} /> {error}
        </p>
      )}
    </div>
  );
}

const contactLinks = [
  { label: 'Email',    value: personal.email,          href: `mailto:${personal.email}`, Icon: IconMail,          external: false },
  { label: 'LinkedIn', value: 'manas-kasaudhan',        href: personal.linkedin,          Icon: IconBrandLinkedin, external: true  },
  { label: 'GitHub',   value: 'manas-kasaudhan',        href: personal.github,            Icon: IconBrandGithub,   external: true  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [fieldErrors, setFieldErrors] = useState({});
  const [touched, setTouched]  = useState({});
  const { sendEmail, status, errorMsg } = useEmailJS();
  const { addToast } = useToast();

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    if (touched[field]) {
      // Re-validate the single field on change
      setFieldErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleBlur = (field) => () => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Mark all as touched
    setTouched({ name: true, email: true, subject: true, message: true });

    // Full validation
    const validationError = validate(formData);
    if (validationError) {
      const errs = {};
      if (!formData.name.trim() || formData.name.trim().length < 2)    errs.name    = 'Full name required (min 2 chars).';
      if (!EMAIL_RE.test(formData.email.trim()))                        errs.email   = 'Valid email address required.';
      if (!formData.subject.trim() || formData.subject.trim().length < 3) errs.subject = 'Subject required (min 3 chars).';
      if (!formData.message.trim() || formData.message.trim().length < 20) errs.message = 'Message too short (min 20 chars).';
      setFieldErrors(errs);
      return;
    }

    setFieldErrors({});
    const ok = await sendEmail(formData);

    if (ok) {
      addToast({
        type: 'success',
        title: 'Message sent!',
        message: "Thanks for reaching out — I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTouched({});
    } else if (errorMsg) {
      addToast({ type: 'error', title: 'Send failed', message: errorMsg });
    }
  };

  const isSending = status === 'sending';
  const charCount = formData.message.length;

  return (
    <PageLayout>
      {/* Header */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 border border-accent/20 rounded-full text-accent text-xs font-mono font-medium tracking-wider mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Contact
            </div>
            <h1 className="font-space text-4xl md:text-6xl font-bold text-[var(--color-text-primary)] leading-tight mb-6">
              Let&apos;s work
              <br />
              <span className="text-accent">together</span>
            </h1>
            <p className="text-[var(--color-text-muted)] text-lg max-w-xl leading-relaxed">
              Have a project in mind, a role to fill, or just want to say hi?{' '}
              I&apos;d love to hear from you.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Form + Links */}
      <section className="pb-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-3 gap-8 md:gap-10 items-start">

            {/* Contact Links sidebar */}
            <FadeIn direction="right" className="md:col-span-1">
              <div className="space-y-3">
                {contactLinks.map(({ label, href, value, Icon, external }) => (
                  <a
                    key={label}
                    href={href}
                    target={external ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 sm:p-5 bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-2xl hover:border-accent/30 hover:bg-[var(--color-bg-card-hover)] transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center text-accent group-hover:scale-110 transition-transform shrink-0">
                      <Icon size={20} stroke={1.8} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[var(--color-text-secondary)] text-xs font-mono uppercase tracking-wider mb-0.5">{label}</p>
                      <p className="text-[var(--color-text-primary)] text-sm group-hover:text-accent transition-colors truncate">{value}</p>
                    </div>
                    <IconArrowUpRight size={16} className="text-[var(--color-text-secondary)] group-hover:text-accent shrink-0 transition-colors" />
                  </a>
                ))}

                {/* Availability note */}
                <div className="p-4 sm:p-5 bg-accent/5 border border-accent/20 rounded-2xl">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-green-400 text-xs font-mono font-medium">Available</span>
                  </div>
                  <div className="flex items-start gap-2 text-[var(--color-text-muted)] text-sm leading-relaxed">
                    <IconClock size={14} className="shrink-0 mt-0.5 text-[var(--color-text-secondary)]" stroke={1.8} />
                    Usually responds within{' '}
                    <span className="text-accent font-medium">24 hours</span>.
                    Open to full-time roles and freelance projects.
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Form */}
            <FadeIn direction="left" delay={0.2} className="md:col-span-2">
              <div className="bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-2xl p-6 sm:p-8">
                <h2 className="font-space text-xl font-bold text-[var(--color-text-primary)] mb-7">
                  Send a message
                </h2>

                <AnimatePresence mode="wait">
                  {status === 'sent' ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-center py-16"
                    >
                      <div className="w-16 h-16 rounded-full bg-green-400/15 flex items-center justify-center mx-auto mb-5">
                        <IconCheck size={32} className="text-green-400" stroke={2} />
                      </div>
                      <h3 className="font-space text-xl font-bold text-[var(--color-text-primary)] mb-2">
                        Message sent!
                      </h3>
                      <p className="text-[var(--color-text-muted)] text-sm mb-6">
                        Thanks for reaching out. I&apos;ll get back to you soon.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      className="space-y-5"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      noValidate
                    >
                      <div className="grid sm:grid-cols-2 gap-5">
                        <InputField
                          label="Full Name"
                          id="name"
                          icon={IconUser}
                          placeholder="John Doe"
                          required
                          value={formData.name}
                          onChange={handleChange('name')}
                          error={touched.name ? fieldErrors.name : undefined}
                        />
                        <InputField
                          label="Email Address"
                          id="email"
                          type="email"
                          icon={IconMail}
                          placeholder="hello@example.com"
                          required
                          value={formData.email}
                          onChange={handleChange('email')}
                          error={touched.email ? fieldErrors.email : undefined}
                        />
                      </div>

                      <InputField
                        label="Subject"
                        id="subject"
                        icon={IconMessage}
                        placeholder="Project opportunity / Freelance / Just saying hi"
                        required
                        value={formData.subject}
                        onChange={handleChange('subject')}
                        error={touched.subject ? fieldErrors.subject : undefined}
                      />

                      {/* Message textarea with character counter */}
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <label htmlFor="message" className="text-[var(--color-text-muted)] text-sm font-medium">
                            Message <span className="text-accent">*</span>
                          </label>
                          <span className={`text-xs font-mono ${charCount < 20 ? 'text-[var(--color-text-secondary)]' : 'text-green-400'}`}>
                            {charCount} / 1000
                          </span>
                        </div>
                        <textarea
                          id="message"
                          rows={6}
                          maxLength={1000}
                          placeholder="Tell me about your project, what you're looking for, or just say hello..."
                          required
                          value={formData.message}
                          onChange={handleChange('message')}
                          onBlur={handleBlur('message')}
                          aria-invalid={!!(touched.message && fieldErrors.message)}
                          className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-[var(--color-text-primary)] placeholder-[var(--color-text-secondary)] text-sm focus:outline-none focus:bg-accent/5 transition-all duration-200 resize-none ${
                            touched.message && fieldErrors.message
                              ? 'border-red-500/60 focus:border-red-500'
                              : 'border-[var(--color-border)] focus:border-accent/60'
                          }`}
                        />
                        {touched.message && fieldErrors.message && (
                          <p className="mt-1.5 text-red-400 text-xs flex items-center gap-1">
                            <IconAlertCircle size={12} /> {fieldErrors.message}
                          </p>
                        )}
                      </div>

                      {/* Global error */}
                      {status === 'error' && errorMsg && (
                        <div className="flex items-center gap-2 px-4 py-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
                          <IconAlertCircle size={16} />
                          {errorMsg}
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={isSending}
                        className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-accent hover:bg-accent-hover disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium rounded-xl transition-all duration-200 hover:shadow-accent text-sm"
                      >
                        {isSending ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            >
                              <IconLoader2 size={16} />
                            </motion.div>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <IconSend size={16} stroke={2} />
                          </>
                        )}
                      </button>

                      <p className="text-center text-[var(--color-text-secondary)] text-xs">
                        Your information is safe and will never be shared.
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
