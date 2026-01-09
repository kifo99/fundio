import './login.css';
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
      <h1 className="login-title">LOGIN</h1>
      <form className="login-form" action="post" onSubmit={handleSubmit}>
        <div className="login-field">
          <input
            className="login-input"
            type="email"
            name="email"
            placeholder="Email address"
            onChange={(e) =>
              setUserInput({ ...userInput, email: e.target.value })
            }
          />
        </div>
        <div className="login-field">
          <input
            className="login-input"
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) =>
              setUserInput({ ...userInput, password: e.target.value })
            }
          />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>

      <button className="register-button" onClick={() => navigate('/signup')}>
        Register
      </button>
    </div>
  );
}
