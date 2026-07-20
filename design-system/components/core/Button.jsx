import React from 'react';

/** Primary action button. Renders <a> when href is set, else <button>. */
export function Button({ variant = 'primary', size = 'md', href, children, style, ...rest }) {
  const base = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
    fontFamily: 'var(--font-body)', fontWeight: 'var(--weight-medium)', lineHeight: 1,
    borderRadius: 'var(--radius)', cursor: 'pointer', textDecoration: 'none',
    border: '1px solid transparent', transition: 'filter .15s ease', boxSizing: 'border-box',
  };
  const sizes = {
    md: { padding: '16px 28px', fontSize: 'var(--text-body)' },
    sm: { padding: '10px 18px', fontSize: '14px' },
    block: { padding: '16px', fontSize: 'var(--text-body)', width: '100%' },
  };
  const variants = {
    primary: { background: 'var(--accent)', color: 'var(--on-accent)' },
    secondary: { background: 'transparent', color: 'var(--accent)', borderColor: 'var(--accent-border)' },
    onAccent: { background: 'var(--on-accent)', color: 'var(--accent)', fontWeight: 'var(--weight-semibold)' },
  };
  const Tag = href ? 'a' : 'button';
  return React.createElement(
    Tag,
    { href, style: { ...base, ...sizes[size], ...variants[variant], ...style },
      onMouseEnter: e => (e.currentTarget.style.filter = 'brightness(.9)'),
      onMouseLeave: e => (e.currentTarget.style.filter = 'none'), ...rest },
    children
  );
}
