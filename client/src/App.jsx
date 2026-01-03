import { Navigation } from './components/navigation/Navigation';
import { Login } from './components/auth/login/Login';
import { Signup } from './components/auth/signup/Signup';
import { Home } from './components/home/Home';
import { BrowserRouter, Route, Routes } from 'react-router';

function App() {
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
