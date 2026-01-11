import './signup.scss';
import { useSignup } from '../../../queries/auth.queries';
import { data, useNavigate } from 'react-router';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  setUserId,
  setUserToken,
  setIsAuth,
  setSuccess,
  setLoginTime,
} from '../../../store/authSlice';

export function Signup() {
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [signupType, setSignupType] = useState('user');

  const signup = useSignup();
  const dispatch = useDispatch();

  function handleSignup(e) {
    e.preventDefault();
    signup.mutate(userInput, {
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

  function handleVendorSignup(e) {}

  return (
    <div className="signup">
      <form
        className="signup-container"
        action="post"
        onSubmit={signupType === 'user' ? handleSignup : handleVendorSignup}
      >
        <h1 className="signup-title">
          {signupType === 'user' ? 'SIGN UP' : 'SIGN UP AS VENDOR'}
        </h1>
        <div className="input-group">
          <label htmlFor="firstName">FIRST NAME</label>
          <input
            type="firstName"
            id="firstName"
            name="firstName"
            placeholder="Your name"
            onChange={(e) =>
              setUserInput({ ...userInput, firstName: e.target.value })
            }
          />
        </div>
        <div className="input-group">
          <label htmlFor="lastName">LAST NAME</label>
          <input
            type="lastName"
            id="lastName"
            name="lastName"
            placeholder="Your last name"
            onChange={(e) =>
              setUserInput({ ...userInput, lastName: e.target.value })
            }
          />
        </div>
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
        <div className="input-group">
          <label htmlFor="confirmPassword">CONFIRM PASSWORD</label>
          <input
            type="confirmPassword"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="********"
            onChange={(e) =>
              setUserInput({ ...userInput, confirmPassword: e.target.value })
            }
          />
        </div>

        <button type="submit">SIGN UP</button>
        {signupType === 'user' ? (
          <>
            <div className="divider"></div>

            <div className="signup-footer">
              Want to sell your own products?{' '}
              <span onClick={() => setSignupType('vendor')}>
                Sign up as Vendor
              </span>
            </div>
          </>
        ) : (
          <>
            <div className="divider"></div>

            <div className="signup-footer">
              Go back to?{' '}
              <span onClick={() => setSignupType('user')}>Sign up</span>
            </div>
          </>
        )}
      </form>
    </div>
  );
}
