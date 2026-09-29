import { motion } from 'framer-motion';
import { fade } from '../../fade';

export function AuthBanner({ side, visible, title, text, buttonLabel, onSetIsActive }) {
  return (
    <motion.div
      className={`absolute top-0 z-20 flex h-full w-1/2 flex-col items-center justify-center p-10 text-center text-white ${side === 'left' ? 'left-0' : 'right-0'}`}
      {...fade(visible)}
    >
      <h2>{title}</h2>
      <p>{text}</p>
      <button
        type="button"
        className="rounded-full border border-white px-8 py-2"
        onClick={onSetIsActive}
      >
        {buttonLabel}
      </button>
    </motion.div>
  );
}
