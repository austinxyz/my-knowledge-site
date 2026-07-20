export interface PricingCardProps {
  /** Tier name, e.g. "单次深度咨询". */
  name: string;
  /** Price string, e.g. "$299". */
  price: string;
  /** Suffix after the figure, e.g. "/年". */
  period?: string;
  /** Sub-price note, e.g. "一次 90 分钟 · 一对一". */
  note?: string;
  /** Feature bullet strings. */
  features?: string[];
  /** CTA label. */
  cta?: string;
  href?: string;
  /** Fills the card with accent, inverts text, shows the badge. */
  featured?: boolean;
  /** Badge text when featured. Default "最受欢迎". */
  badge?: string;
  style?: React.CSSProperties;
}
export function PricingCard(props: PricingCardProps): JSX.Element;
