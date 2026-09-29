export const SLIDE = { duration: 0.6, delay: 0.2, ease: [0.76, 0, 0.24, 1] };

export function fade(visible) {
  return {
    animate: { opacity: visible ? 1 : 0 },
    transition: { duration: 0.25, delay: visible ? 0.65 : 0 },
    style: { PointerEvents: visible ? 'auto' : 'none' },
    'aria-hidden': !visible,
    inert: !visible,
  };
}
