export interface ButtonProps {
  /** Visual style. primary = filled accent; secondary = outline; onAccent = white on a dark accent band. */
  variant?: 'primary' | 'secondary' | 'onAccent';
  /** md (default) | sm | block (full-width, for pricing CTAs). */
  size?: 'md' | 'sm' | 'block';
  /** When set, renders an <a> instead of <button>. */
  href?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function Button(props: ButtonProps): JSX.Element;
