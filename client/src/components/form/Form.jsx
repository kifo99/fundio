import { FormField } from './FormField.jsx';
import { useAuthSuccess } from '../../hooks/useAuthSuccess.js';

export function Form({ className, mutation, onSetUserInput, children }) {
  const onAuthSuccess = useAuthSuccess();

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    mutation.mutate(data, { onSuccess: onAuthSuccess });
    onSetUserInput(data);
  }

  return (
    <form onSubmit={handleSubmit} className={`${className}`}>
      {children}
    </form>
  );
}
