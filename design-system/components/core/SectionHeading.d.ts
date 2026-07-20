export interface SectionHeadingProps {
  /** Small muted label above the title. */
  eyebrow?: string;
  /** Serif section title. */
  title: string;
  /** Text alignment. Default center. */
  align?: 'center' | 'left';
  style?: React.CSSProperties;
}
export function SectionHeading(props: SectionHeadingProps): JSX.Element;
