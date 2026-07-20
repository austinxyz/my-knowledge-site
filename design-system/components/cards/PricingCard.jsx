import React from 'react';
import { Button } from '../core/Button.jsx';

/** Pricing tier. featured=true fills the card with accent and inverts text. */
export function PricingCard({ name, price, period, note, features = [], cta = '预约', href = '#book', featured = false, badge = '最受欢迎', style, ...rest }) {
  const fg = featured ? 'var(--on-accent)' : 'var(--ink)';
  return React.createElement(
    'div',
    { style: {
        position: 'relative', padding: 'var(--pad-card-lg)', borderRadius: 'var(--radius-xl)',
        background: featured ? 'var(--accent)' : 'var(--surface)',
        border: featured ? '1px solid transparent' : '1px solid var(--line)',
        color: fg, boxShadow: featured ? 'var(--shadow-pop)' : 'none', ...style,
      }, ...rest },
    featured && badge && React.createElement('div', {
      style: {
        position: 'absolute', top: '20px', right: '24px', fontSize: 'var(--text-eyebrow)',
        letterSpacing: '.12em', background: 'rgba(255,255,255,.16)', padding: '5px 11px',
        borderRadius: 'var(--radius-pill)',
      },
    }, badge),
    React.createElement('div', { style: { fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-semibold)', fontSize: 'var(--text-title)' } }, name),
    React.createElement('div', { style: { margin: '16px 0 6px', fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-bold)', fontSize: 'var(--text-price)' } },
      price,
      period && React.createElement('span', { style: { fontSize: '16px', fontWeight: 'var(--weight-medium)', opacity: .8 } }, period)
    ),
    note && React.createElement('div', { style: { fontSize: 'var(--text-small)', color: featured ? 'var(--on-accent-muted)' : 'var(--muted)', marginBottom: '24px' } }, note),
    React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: '12px', fontSize: 'var(--text-body)', lineHeight: 1.5, color: featured ? 'var(--on-accent-muted)' : 'var(--body)' } },
      features.map((f, i) => React.createElement('div', { key: i, style: { display: 'flex', gap: '10px' } },
        React.createElement('span', { style: { color: featured ? 'var(--check)' : 'var(--accent)', fontWeight: 'var(--weight-bold)' } }, '✓'),
        f
      ))
    ),
    React.createElement('div', { style: { marginTop: '28px' } },
      React.createElement(Button, { href, size: 'block', variant: featured ? 'onAccent' : 'secondary' }, cta)
    )
  );
}
