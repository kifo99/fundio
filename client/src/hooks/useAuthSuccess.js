import { useDispatch } from 'react-redux';
import {
  setIsAuth,
  setLoginTime,
  setSuccess,
  setUserId,
  setUserToken,
} from '../../store/authSlice.js';
import { useNavigate } from 'react-router';

export function useAuthSuccess() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (data) => {
    dispatch(setUserId(data.user.id));
    dispatch(setUserToken(data.user.token));
    dispatch(setIsAuth());
    dispatch(setSuccess());
    dispatch(setLoginTime());
    navigate('/');
  };
}
