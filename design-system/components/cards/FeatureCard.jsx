import React from 'react';

/** Pain-point / feature card: numbered chip, serif title, body copy. */
export function FeatureCard({ index, title, children, style, ...rest }) {
  return React.createElement(
    'div',
    { style: {
        padding: 'var(--pad-card)', background: 'var(--surface)',
        border: '1px solid var(--line)', borderRadius: 'var(--radius-lg)', ...style,
      }, ...rest },
    index && React.createElement('div', {
      style: {
        width: '44px', height: '44px', borderRadius: 'var(--radius-md)',
        background: 'var(--accent-tint)', color: 'var(--accent)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-bold)',
        fontSize: '18px', marginBottom: '20px',
      },
    }, index),
    React.createElement('h3', {
      style: {
        margin: '0 0 12px', fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-semibold)',
        fontSize: 'var(--text-h3)', lineHeight: 'var(--lh-snug)', color: 'var(--ink)',
      },
    }, title),
    React.createElement('p', {
      style: { margin: 0, fontSize: 'var(--text-body)', lineHeight: 'var(--lh-body)', color: 'var(--body)' },
    }, children)
  );
}
