import { useDispatch } from 'react-redux';
import { logout } from '../../store/authSlice';
export function Home() {
  const dispatch = useDispatch();

  function handleLogout() {
    console.log('Clicked!');
    dispatch(logout());
    // dispatch({ type: 'USER_LOGOUT' });
  }
  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
