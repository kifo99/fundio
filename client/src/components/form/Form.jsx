import { useAuthSuccess } from '../../hooks/useAuthSuccess.js';
import { setError, clearError } from '../../store/authSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import { getErrorMessages } from '../../utils/getErrorMessages.js';
import { useEffect } from 'react';

export function Form({ className, mutation, onSetUserInput, children }) {
  const onAuthSuccess = useAuthSuccess();
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);
  useEffect(() => {
    dispatch(clearError());
  }, [dispatch]);
  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    dispatch(clearError());
    mutation.mutate(data, {
      onSuccess: onAuthSuccess,
      onError: (err) => dispatch(setError(getErrorMessages(err))),
    });
    onSetUserInput(data);
  }

  return (
    <form onSubmit={handleSubmit} className={`${className}`}>
      {children}
      {error && (
        <ul role="alert" className="form-errors">
          {[].concat(error).map((msg, i) => (
            <li key={i}>{msg}</li>
          ))}
        </ul>
      )}
    </form>
  );
}
