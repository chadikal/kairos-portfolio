import type { ReactNode } from 'react';
import { Arrow } from './arrow';
type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
};
export function ButtonLink({
  href,
  children,
  variant = 'primary',
}: ButtonLinkProps) {
  return (
    <a className={`button button--${variant}`} href={href}>
      {children}
      <Arrow diagonal={variant === 'secondary'} />
    </a>
  );
}
