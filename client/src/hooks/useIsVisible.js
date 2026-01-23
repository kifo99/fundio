import { useState, useEffect } from 'react';

// Pass element ref and set visibility of element in viewport
export function useIsVisible(ref) {
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    if (!ref?.current) {
      console.log('Reference is not passed');
      return;
    }
    console.log('Reference is passed');
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}
