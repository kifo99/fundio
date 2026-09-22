import { useMediaQuery } from '../../../hooks/useMediaQuery.js';
import { AuthCompact } from './components/AuthCompact';
import { AuthWide } from './components/AuthWide';

export function Auth() {
  const isWide = useMediaQuery('(min-width: 1024px)');
  return isWide ? <AuthWide /> : <AuthCompact />;
}
