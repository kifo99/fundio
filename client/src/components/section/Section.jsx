import { useEffect } from 'react';
import { useIsVisible } from '../../hooks/useIsVisible.js';
import './section.scss';

export function Section({
  variant = 'default',
  imgUrl = '',
  propRef,
  children,
}) {
  let targetVisible = useIsVisible(propRef);
  useEffect(() => {
    if (!propRef?.current) {
      console.log('Reference does not exist');
      return;
    }

    const spans = propRef.current.querySelectorAll('span');

    spans.forEach((element) => {
      element.classList.add('active');
    });
  }, [propRef]);

  useEffect(() => {
    if (!propRef) return;

    const aboutTitles = propRef.current.querySelectorAll('.about__title');

    if (!aboutTitles) return;

    console.log('about title is ready');
    aboutTitles.forEach((el) => {
      el.classList.toggle('active', targetVisible);
      console.log(el);
    });
    // aboutTitle.classList.add('active');
  }, [propRef, targetVisible]);

  return (
    <section
      className={`section section--${variant}`}
      style={{ backgroundImage: `url(${imgUrl})` }}
    >
      {children}
    </section>
  );
}
