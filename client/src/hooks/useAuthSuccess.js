import { useDispatch } from 'react-redux';
import { setCredentials } from '../store/authSlice.js';
import { useNavigate } from 'react-router';
import { notify } from '../utils/notify.jsx';

export function useAuthSuccess() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (data) => {
    dispatch(setCredentials(data));
    notify.success(data.message);
    navigate('/');
  };
}
