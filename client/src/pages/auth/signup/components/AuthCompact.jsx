import { LoginForm } from './LoginForm';
import { SignupForm } from './SignupForm';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export function AuthCompact() {
  const [mode, setMode] = useState('login');
  return (
    <AnimatePresence initial={false} mode="popLayout">
      {mode === 'login' ? (
        <motion.div
          key="login"
          initial={{ y: '-100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          className="absolute inset-0 h-full flex flex-col justify-normal items-center"
        >
          <LoginForm onSetMode={setMode} />
        </motion.div>
      ) : (
        <motion.div
          key="signup"
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '100%', opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          className="absolute inset-0 h-full flex flex-col justify-center items-center"
        >
          <SignupForm onSetMode={setMode} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
