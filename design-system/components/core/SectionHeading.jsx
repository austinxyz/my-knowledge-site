import React from 'react';

/** Centered section eyebrow + heading used above pain-points / pricing. */
export function SectionHeading({ eyebrow, title, align = 'center', style, ...rest }) {
  return React.createElement(
    'div',
    { style: { textAlign: align, ...style }, ...rest },
    eyebrow && React.createElement('div', {
      style: {
        fontSize: 'var(--text-eyebrow)', letterSpacing: 'var(--track-eyebrow)',
        color: 'var(--muted)', fontWeight: 'var(--weight-medium)', marginBottom: '12px',
      },
    }, eyebrow),
    React.createElement('h2', {
      style: {
        margin: 0, fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-semibold)',
        fontSize: 'var(--text-h2)', color: 'var(--ink)',
      },
    }, title)
  );
}
