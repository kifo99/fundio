import { createSlice } from '@reduxjs/toolkit';
import { useLogin } from '../queries/auth.queries';
import { persistor } from './store';

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
    setIsAuth: (state) => {
      state.isAuth = true;
    },
    setLoading: (state) => {
      state.loading = true;
    },
    setSuccess: (state) => {
      state.success = true;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearState: (state) => {
      return initialState;
    },
    clearPersistedData: () => {
      persistor.purge();
      return initialState();
    },
  },
  extraReducers: (builder) => {},
});

// TODO export the rest of actions
export const { setUser, setUserToken, setIsAuth, setSuccess } =
  authSlice.actions;
export default authSlice.reducer;
