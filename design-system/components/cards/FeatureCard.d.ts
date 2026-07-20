export interface FeatureCardProps {
  /** Two-digit index shown in the accent chip, e.g. "01". Omit to hide the chip. */
  index?: string;
  /** Serif card heading. */
  title: string;
  /** Body copy. */
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function FeatureCard(props: FeatureCardProps): JSX.Element;
