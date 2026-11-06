type ServiceCardProps = {
  number: string;
  title: string;
  description: string;
  code: string;
};
export function ServiceCard({
  number,
  title,
  description,
  code,
}: ServiceCardProps) {
  return (
    <article className="service-card">
      <div className="service-topline">
        <span className="technical">{number}</span>
        <span className="service-symbol" aria-hidden="true">
          {code}
        </span>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}
