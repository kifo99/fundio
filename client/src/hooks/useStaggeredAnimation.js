import { useEffect } from 'react';

export const useStaggeredAnimation = ({
  ref,
  selector,
  className,
  isVisible,
  stagger = 0,
  activeOnMount = true,
}) => {
  useEffect(() => {
    if (!ref?.current) {
      console.log('Reference does not exist');
      return;
    }
    if (!selector) return;
    const elements = ref.current.querySelectorAll(`${selector}`);

    if (!elements.length) return;

    if (activeOnMount) {
      elements.forEach((el) => {
        el.classList.add(`${className}`);
      });
    }

    elements.forEach((el, i) => {
      el.classList.toggle(`${className}`, isVisible);

      if (stagger) {
        if (isVisible) {
          el.style.transitionDelay = `${i * stagger}s`;
        } else {
          el.style.transitionDelay = '0s';
        }
      }
    });
  }, [ref, selector, isVisible, stagger, activeOnMount]);
};
