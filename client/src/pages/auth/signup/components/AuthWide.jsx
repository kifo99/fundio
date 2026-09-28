import { LoginForm } from './LoginForm';
import { SignupForm } from './SignupForm';
import { motion, AnimatePresence } from 'framer-motion';

export function AuthWide() {
  return (
    <div>
      <div>
        <AnimatedPresence initial={false} mode="popLayout"></AnimatedPresence>
      </div>
    </div>
  );
}
