import './login.scss';
import { useNavigate } from 'react-router';
import { useLogin } from '../../../queries/auth.queries';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  setUserId,
  setUserToken,
  setIsAuth,
  setSuccess,
  setLoginTime,
} from '../../../store/authSlice';

export function Login() {
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState({ email: '', password: '' });
  const login = useLogin();
  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
    login.mutate(userInput, {
      onSuccess: (data) => {
        dispatch(setUserId(data.user.id));
        dispatch(setUserToken(data.token));
        dispatch(setIsAuth());
        dispatch(setSuccess());
        dispatch(setLoginTime());
        navigate('/');
      },
    });
  }
  // TODO add tost about successful login

  // TODO Create Authentication of input

  // TODO Show errors
  return (
    <div className="login">
      <form className="login-container" action="post" onSubmit={handleSubmit}>
        <h1 className="login-title">LOGIN</h1>

        <div className="input-group">
          <label htmlFor="email">EMAIL</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="your@email.com"
            onChange={(e) =>
              setUserInput({ ...userInput, email: e.target.value })
            }
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">PASSWORD</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="********"
            onChange={(e) =>
              setUserInput({ ...userInput, password: e.target.value })
            }
          />
        </div>

        <button type="submit">SIGN IN</button>

        <div className="divider"></div>

        <div className="footer">
          Don't have an account?{' '}
          <span onClick={() => navigate('/signup')}>Sign up</span>
        </div>
      </form>
    </div>
  );
}
