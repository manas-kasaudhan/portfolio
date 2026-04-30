'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personal } from '@/data/portfolio';
import PageLayout from '@/components/PageLayout';
import { FadeIn } from '@/components/AnimateInView';
import {
  IconMail,
  IconBrandLinkedin,
  IconBrandGithub,
  IconArrowUpRight,
  IconSend,
  IconCheck,
  IconLoader2,
  IconClock,
} from '@tabler/icons-react';

function InputField({ label, id, type = 'text', placeholder, required, value, onChange }) {
  return (
    <div>
      <label htmlFor={id} className="block text-[#D8DADD]/70 text-sm font-medium mb-2">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-[#D8DADD] placeholder-[#5A6068] text-sm focus:outline-none focus:border-accent/60 focus:bg-accent/5 transition-all duration-200"
      />
    </div>
  );
}

const contactLinks = [
  {
    label: 'Email',
    value: personal.email,
    href: `mailto:${personal.email}`,
    Icon: IconMail,
    external: false,
  },
  {
    label: 'LinkedIn',
    value: 'manas-kasaudhan',
    href: personal.linkedin,
    Icon: IconBrandLinkedin,
    external: true,
  },
  {
    label: 'GitHub',
    value: 'manas-kasaudhan',
    href: personal.github,
    Icon: IconBrandGithub,
    external: true,
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    await new Promise((r) => setTimeout(r, 1500));
    setStatus('sent');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

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
            <h1 className="font-space text-4xl md:text-6xl font-bold text-[#D8DADD] leading-tight mb-6">
              Let&apos;s work
              <br />
              <span className="text-accent">together</span>
            </h1>
            <p className="text-[#D8DADD]/60 text-lg max-w-xl leading-relaxed">
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
            {/* Contact Links */}
            <FadeIn direction="right" className="md:col-span-1">
              <div className="space-y-3">
                {contactLinks.map(({ label, href, value, Icon, external }) => (
                  <a
                    key={label}
                    href={href}
                    target={external ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 sm:p-5 bg-white/3 border border-white/8 rounded-2xl hover:border-accent/30 hover:bg-accent/5 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center text-accent group-hover:scale-110 transition-transform shrink-0">
                      <Icon size={20} stroke={1.8} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[#5A6068] text-xs font-mono uppercase tracking-wider mb-0.5">
                        {label}
                      </p>
                      <p className="text-[#D8DADD] text-sm group-hover:text-accent transition-colors truncate">
                        {value}
                      </p>
                    </div>
                    <IconArrowUpRight
                      size={16}
                      className="text-[#5A6068] group-hover:text-accent shrink-0 transition-colors"
                    />
                  </a>
                ))}

                {/* Response time note */}
                <div className="p-4 sm:p-5 bg-accent/5 border border-accent/20 rounded-2xl">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-green-400 text-xs font-mono font-medium">Available</span>
                  </div>
                  <div className="flex items-start gap-2 text-[#D8DADD]/60 text-sm leading-relaxed">
                    <IconClock size={14} className="shrink-0 mt-0.5 text-[#5A6068]" stroke={1.8} />
                    Usually responds within{' '}
                    <span className="text-accent font-medium">24 hours</span>.
                    Open to full-time roles and freelance projects.
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Form */}
            <FadeIn direction="left" delay={0.2} className="md:col-span-2">
              <div className="bg-white/3 border border-white/8 rounded-2xl p-6 sm:p-8">
                <h2 className="font-space text-xl font-bold text-[#D8DADD] mb-7">
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
                      <h3 className="font-space text-xl font-bold text-[#D8DADD] mb-2">
                        Message sent!
                      </h3>
                      <p className="text-[#D8DADD]/60 text-sm mb-6">
                        Thanks for reaching out. I&apos;ll get back to you soon.
                      </p>
                      <button
                        onClick={() => setStatus('idle')}
                        className="text-accent text-sm hover:underline"
                      >
                        Send another message
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      className="space-y-5"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="grid sm:grid-cols-2 gap-5">
                        <InputField
                          label="Full Name"
                          id="name"
                          placeholder="Manas Kasaudhan"
                          required
                          value={formData.name}
                          onChange={handleChange('name')}
                        />
                        <InputField
                          label="Email Address"
                          id="email"
                          type="email"
                          placeholder="hello@example.com"
                          required
                          value={formData.email}
                          onChange={handleChange('email')}
                        />
                      </div>

                      <InputField
                        label="Subject"
                        id="subject"
                        placeholder="Project opportunity / Freelance work / Just saying hi"
                        required
                        value={formData.subject}
                        onChange={handleChange('subject')}
                      />

                      <div>
                        <label htmlFor="message" className="block text-[#D8DADD]/70 text-sm font-medium mb-2">
                          Message <span className="text-accent">*</span>
                        </label>
                        <textarea
                          id="message"
                          rows={6}
                          placeholder="Tell me about your project, what you're looking for, or just say hello..."
                          required
                          value={formData.message}
                          onChange={handleChange('message')}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-[#D8DADD] placeholder-[#5A6068] text-sm focus:outline-none focus:border-accent/60 focus:bg-accent/5 transition-all duration-200 resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-accent hover:bg-accent-hover disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium rounded-xl transition-all duration-200 hover:shadow-accent text-sm"
                      >
                        {status === 'sending' ? (
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
