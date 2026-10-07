import { FormField } from './FormField.jsx';
import { useAuthSuccess } from '../../hooks/useAuthSuccess.js';
import { setError } from '../../store/authSlice.js';
import { useDispatch } from 'react-redux';
import { getErrorMessages } from '../../utils/getErrorMessages.js';

export function Form({ className, mutation, onSetUserInput, children }) {
  const onAuthSuccess = useAuthSuccess();
  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    mutation.mutate(data, {
      onSuccess: onAuthSuccess,
      onError: (err) => dispatch(setError(getErrorMessages(err))),
    });
    onSetUserInput(data);
  }

  return (
    <form onSubmit={handleSubmit} className={`${className}`}>
      {children}
    </form>
  );
}
