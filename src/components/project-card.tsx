export type Project = {
  title: string;
  number: string;
  status: string;
  placeholder: string;
  tone: 'violet' | 'blue';
};
export function ProjectCard({
  title,
  number,
  status,
  placeholder,
  tone,
}: Project) {
  return (
    <article className={`project-card project-card--${tone}`}>
      <div className="project-preview">
        <div className="preview-topline">
          <span className="technical">PROJECT / {number}</span>
          <span className="status-pill">{status}</span>
        </div>
        <div className="project-placeholder">
          <span aria-hidden="true" className="placeholder-cross">
            +
          </span>
          <p>{title}</p>
          <span className="technical">{placeholder}</span>
        </div>
        <span className="preview-corner" aria-hidden="true" />
      </div>
      <div className="project-caption">
        <h3>{title}</h3>
        <p>Project details coming soon</p>
      </div>
    </article>
  );
}
