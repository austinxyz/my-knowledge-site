export interface BadgeProps {
  /** tint = accent-on-tint pill; solid = filled accent; onAccent = translucent on dark band; ghost = plain eyebrow. */
  variant?: 'tint' | 'solid' | 'onAccent' | 'ghost';
  /** Use the monospace face (credentials / placeholders). */
  mono?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function Badge(props: BadgeProps): JSX.Element;
