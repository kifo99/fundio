import { useEffect } from 'react';
import { useIsVisible } from '../../hooks/useIsVisible.js';
import './section.scss';

export function Section({
  variant = 'default',
  imgUrl = '',
  propRef,
  children,
}) {
  const targetVisible = useIsVisible(propRef);

  // Handles style and animation of hero section
  useEffect(() => {
    if (!propRef?.current) {
      console.log('Reference does not exist');
      return;
    }

    const spans = propRef.current.querySelectorAll('span');

    // adds active class to hero title
    spans.forEach((element) => {
      element.classList.add('active');
    });
  }, [propRef]);

  // Handles styling and animation of about section
  useEffect(() => {
    if (!propRef) return;

    const aboutTitles = propRef.current.querySelectorAll('.about__title');
    const spans = propRef.current.querySelectorAll('.about__body-title span');
    const cards = propRef.current.querySelectorAll('.about__body-wrapper div');

    // sets daley for the animation of about title
    if (!spans.length) return;
    spans.forEach((el, i) => {
      el.classList.toggle('active', targetVisible);

      if (targetVisible) {
        el.style.transitionDelay = `${i * 0.1}s`;
      } else {
        el.style.transitionDelay = '0s';
      }
    });

    // sets daley for animation to all cards inside about sections body
    if (!cards.length) return;
    cards.forEach((el, i) => {
      el.classList.toggle('active', targetVisible);

      if (targetVisible) {
        el.style.transitionDelay = targetVisible ? `${(i + 1) * 0.3}s` : '0s';
      } else {
        el.style.transitionDelay = '0s';
      }
    });

    // adds active class based on section visibility
    if (!aboutTitles) return;

    aboutTitles.forEach((el) => {
      el.classList.toggle('active', targetVisible);
    });
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
