import { useEffect } from 'react';
import { useIsVisible } from '../../hooks/useIsVisible.js';
import { useStaggeredAnimation } from '../../hooks/useStaggeredAnimation.js';
import './section.scss';

export function Section({
  variant = 'default',
  imgUrl = '',
  propRef,
  children,
}) {
  const targetVisible = useIsVisible(propRef);

  useStaggeredAnimation({
    ref: propRef,
    selector: 'span',
    className: 'active',
    isVisible: targetVisible,
  });
  useStaggeredAnimation({
    ref: propRef,
    selector: '.about__title',
    className: 'active',
    isVisible: targetVisible,
    activeOnMount: false,
  });
  useStaggeredAnimation({
    ref: propRef,
    selector: '.about__more',
    className: 'active',
    isVisible: targetVisible,
    activeOnMount: false,
  });
  useStaggeredAnimation({
    ref: propRef,
    selector: '.about__body-title span',
    className: 'active',
    isVisible: targetVisible,
    stagger: 0.1,
    activeOnMount: false,
  });
  useStaggeredAnimation({
    ref: propRef,
    selector: '.carousel__wrapper div',
    className: 'active',
    isVisible: targetVisible,
    stagger: 0.1,
    activeOnMount: false,
  });

  return (
    <section
      className={`section section--${variant}`}
      style={{ backgroundImage: `url(${imgUrl})` }}
    >
      {children}
    </section>
  );
}
