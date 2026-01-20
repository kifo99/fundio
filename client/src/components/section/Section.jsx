import './section.scss';

export function Section({ variant = 'default', imgUrl = '', children }) {
  return (
    <section
      className={`section section--${variant}`}
      style={{ backgroundImage: `url(${imgUrl})` }}
    >
      {children}
    </section>
  );
}
