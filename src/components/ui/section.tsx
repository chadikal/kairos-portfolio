import type { ReactNode } from 'react';
type SectionProps = {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};
export function Section({
  id,
  index,
  eyebrow,
  title,
  description,
  children,
  className = '',
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`section ${className}`}
    >
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              <span>{index} /</span> {eyebrow}
            </p>
            <h2 id={`${id}-title`}>{title}</h2>
          </div>
          {description && <p className="section-description">{description}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}
