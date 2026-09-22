import { LoginForm } from './LoginForm';
import { SignupForm } from './SignupForm';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export function AuthCompact() {
  const [mode, setMode] = useState('login');
  return (
    <div className="flex flex-col justify-center items-center h-dvh w-full sm:w-2/3 md:w-1/2 lg:w-1/2 m-auto">
      <div className="relative h-full w-full flex items-center justify-center overflow-hidden">
        <div className="relative w-full h-full md:max-h-[65dvh] lg:w-1/2 overflow-hidden">
          <AnimatePresence initial={false} mode="popLayout">
            {mode === 'login' ? (
              <motion.div
                key="login"
                initial={{ y: '-100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: '-100%', opacity: 0 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="h-full flex flex-col justify-normal items-center"
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
        </div>
      </div>
    </div>
  );
}
