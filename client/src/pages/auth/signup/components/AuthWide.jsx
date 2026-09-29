import { useState } from 'react';
import { motion } from 'framer-motion';
import { LoginForm } from './LoginForm';
import { SignupForm } from './SignupForm';
import { fade } from '../../fade.js';
import { SlidingBackground } from './SlidingBackground.jsx';
import { AuthBanner } from './AuthBanner.jsx';

export function AuthWide() {
  const [isActive, setIsActive] = useState(false); // true = signup active

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="relative h-[85vh] max-h-[720px] min-h-[600px] w-2/3 max-w-[1000px] overflow-hidden rounded-2xl border-2 border-[#3D5A45]">
        <motion.div className="absolute left-0 top-0 h-full w-1/2" {...fade(!isActive)}>
          <LoginForm
            className={'flex flex-col p-6 w-full h-full bg-[#FAF8F4] items-center text-[#1C1D1B]'}
          />
        </motion.div>

        <motion.div className="absolute right-0 top-0 h-full w-1/2" {...fade(isActive)}>
          <SignupForm
            className={'flex flex-col p-6 w-full h-full bg-[#FAF8F4] items-center text-[#1C1D1B]'}
          />
        </motion.div>

        <SlidingBackground isSignup={isActive} />

        <AuthBanner
          side="right"
          visible={!isActive}
          title="Create your account"
          text="Join us and get started today."
          buttonLabel="Sign up"
          onSetIsActive={() => setIsActive(true)}
        />

        <AuthBanner
          side="left"
          visible={isActive}
          title="Welcome back!"
          text="Login to continue to your account."
          buttonLabel="Login"
          onSetIsActive={() => setIsActive(false)}
        />
      </div>
    </div>
  );
}
