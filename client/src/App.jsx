import { useEffect } from 'react';
import { Navigation } from './components/navigation/Navigation';
import { Auth } from './pages/auth/signup/Auth';
import { Home } from './pages/home/Home';
import { Route, Routes } from 'react-router';
import { Toaster } from 'sonner';
import { useMe } from './queries/auth.queries';
import { useDispatch } from 'react-redux';
import { logout, setCredentials } from './store/authSlice';
import { Spinner } from './components/ui/Spinner';

function App() {
  const dispatch = useDispatch();
  const { data, isLoading, isError } = useMe();

  useEffect(() => {
    if (data) dispatch(setCredentials({ user: data.user }));
  }, [data, dispatch]);

  useEffect(() => {
    if (isError) dispatch(logout());
  });

  if (isLoading) return null;
  return (
    <div>
      <Navigation />
      <main className="pt-20 md:pt-0 lg:pt-20">
        {isLoading ? (
          <Spinner />
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        )}
      </main>
      <Toaster />
    </div>
  );
}

export default App;
