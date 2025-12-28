import { createSlice } from '@reduxjs/toolkit';
import { useLogin } from '../queries/auth.queries';

const initialState = {
  loading: false,
  userInfo: {},
  userToken: null,
  isAuth: false,
  error: null,
  success: false,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // TODO Create the rest of set functions (setLoading, setIsAuth, setError, setSuccess)
    setUser: (state, action) => {
      state.userInfo = action.payload;
      console.log(`State set userInfo: ${JSON.stringify(state.userInfo)}`);
    },
    setUserToken: (state, action) => {
      state.userToken = action.payload;
      console.log(`State set userToken: ${state.userToken}`);
    },
  },
  extraReducers: (builder) => {},
});

// TODO export the rest of actions
export const { setUser, setUserToken } = authSlice.actions;
export default authSlice.reducer;
