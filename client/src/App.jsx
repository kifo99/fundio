import { Navigation } from './components/navigation/Navigation';
import { Login } from './components/auth/Login';
import { BrowserRouter, Route, Routes } from 'react-router';

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
