import { useEffect } from 'react';
import './section.scss';

export function Section({
  variant = 'default',
  imgUrl = '',
  backTextRef,
  children,
}) {
  useEffect(() => {
    if (!backTextRef?.current) {
      console.log('Reference does not exist');
      return;
    }

    const spans = backTextRef.current.querySelectorAll('span');

    spans.forEach((element) => {
      element.classList.add('active');
    });
  }, [backTextRef]);

  return (
    <section
      className={`section section--${variant}`}
      style={{ backgroundImage: `url(${imgUrl})` }}
    >
      {children}
    </section>
  );
}
