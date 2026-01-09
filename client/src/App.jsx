import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigation } from './components/navigation/Navigation';
import { Login } from './components/auth/login/Login';
import { Signup } from './components/auth/signup/Signup';
import { Home } from './components/home/Home';
import { Route, Routes } from 'react-router';
import { persistor } from './store/store';

function App() {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const loginTime = useSelector((state) => state.auth.loginTime);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isAuth || !loginTime) return;
    const currentTime = Date.now();
    const sessionDuration = Number(import.meta.env.VITE_SESSION_DURATION);
    const timeLeft = sessionDuration - (currentTime - loginTime);

    if (!loginTime) return;
    if (timeLeft <= 0) {
      console.log('Session already expired');
      return;
    }

    const timeout = setTimeout(() => {
      console.log('Session expired!');
      dispatch({ type: 'EXPIRED_SESSION' });
      persistor.purge();
    }, timeLeft);

    return () => clearTimeout(timeout);
  }, [isAuth, dispatch, loginTime]);

  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
