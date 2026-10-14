import { toast } from 'sonner';
import { ToastMessage } from '../components/toast/ToastMessages';

function show(type, message, options = {}) {
  return toast.custom((id) => <ToastMessage id={id} type={type} message={message} />, {
    id: message,
    ...options,
  });
}

export const notify = {
  success: (msg, opts) => show('success', msg, opts),
  error: (msg, opts) => show('error', msg, opts),
  warning: (msg, opts) => show('alert', msg, opts),
  info: (msg, opts) => show('info', msg, opts),
};
