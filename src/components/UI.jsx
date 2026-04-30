'use client';

import Link from 'next/link';

export function ButtonPrimary({ href, children, onClick, className = '', external = false }) {
  const classes = `inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-hover text-white font-medium rounded-xl transition-all duration-200 hover:shadow-accent hover:scale-105 text-sm ${className}`;

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

export function ButtonOutline({ href, children, onClick, className = '', external = false }) {
  const classes = `inline-flex items-center gap-2 px-6 py-3 border border-white/15 hover:border-accent/50 text-[#D8DADD] hover:text-accent font-medium rounded-xl transition-all duration-200 hover:bg-accent/5 text-sm ${className}`;

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

export function SectionLabel({ children }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 border border-accent/20 rounded-full text-accent text-xs font-mono font-medium tracking-wider uppercase mb-4">
      <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
      {children}
    </div>
  );
}

export function SectionHeading({ title, subtitle, light = false }) {
  return (
    <div className="mb-14">
      <SectionLabel>{title}</SectionLabel>
      <h2 className={`font-space text-3xl md:text-4xl font-bold mt-2 ${light ? 'text-primary' : 'text-[#D8DADD]'}`}>
        {subtitle}
      </h2>
    </div>
  );
}

export function Tag({ children }) {
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 bg-white/5 border border-white/10 text-[#D8DADD]/70 text-xs font-mono rounded-md">
      {children}
    </span>
  );
}
