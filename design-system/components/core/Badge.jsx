import React from 'react';

/** Small pill label — eyebrow context, credentials, "最受欢迎" markers. */
export function Badge({ variant = 'tint', mono = false, children, style, ...rest }) {
  const base = {
    display: 'inline-flex', alignItems: 'center', width: 'fit-content',
    fontFamily: mono ? 'var(--font-mono)' : 'var(--font-body)',
    fontSize: 'var(--text-eyebrow)', fontWeight: 'var(--weight-medium)',
    padding: '6px 12px', borderRadius: 'var(--radius-pill)', lineHeight: 1.2,
  };
  const variants = {
    tint: { background: 'var(--accent-tint)', color: 'var(--accent)' },
    solid: { background: 'var(--accent)', color: 'var(--on-accent)' },
    onAccent: { background: 'rgba(255,255,255,.16)', color: 'var(--on-accent)', letterSpacing: '.12em' },
    ghost: { background: 'transparent', color: 'var(--muted)', letterSpacing: 'var(--track-eyebrow)' },
  };
  return React.createElement('span', { style: { ...base, ...variants[variant], ...style }, ...rest }, children);
}
