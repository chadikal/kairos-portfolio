import { Arrow } from './ui/arrow';
export type ContactChannelProps = {
  label: string;
  value?: string;
  href?: string;
};
export function ContactChannel({ label, value, href }: ContactChannelProps) {
  const content = (
    <>
      <span>{label}</span>
      <span className="channel-value">
        {value || 'Details coming soon'}
        {href && <Arrow diagonal />}
      </span>
    </>
  );
  return href && value ? (
    <a className="contact-channel" href={href}>
      {content}
    </a>
  ) : (
    <div className="contact-channel">
      {content}
      <span className="sr-only">
        {' '}
        — contact information has not been added yet.
      </span>
    </div>
  );
}
