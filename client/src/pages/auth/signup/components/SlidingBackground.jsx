import { motion } from 'framer-motion';
import { SLIDE } from '../../fade.js';

export function SlidingBackground({ isSignup }) {
  return (
    <motion.div
      className="absolute left-0 top-0 z-10 h-full w-1/2 bg-[#3D5A45]"
      initial={false}
      animate={{ x: isSignup ? '0%' : '100%' }}
      transition={SLIDE}
    />
  );
}
