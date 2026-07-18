import { createSlice } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';

const sessionDuration = parseInt(import.meta.env.SESSION_DURATION, 10);

const initialState = {
  userId: null,
  userToken: null,
  isAuth: false,
  error: null,
  success: false,
  loginTime: null,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // TODO Create the rest of set functions (setLoading, setIsAuth, setError, setSuccess)
    setUserId: (state, action) => {
      state.userId = action.payload;
      console.log(`State set userId: ${JSON.stringify(state.userId)}`);
    },
    setUserToken: (state, action) => {
      state.userToken = action.payload;
      console.log(`State set userToken: ${state.userToken}`);
    },
    setIsAuth: (state) => {
      state.isAuth = true;
    },
    setSuccess: (state) => {
      state.success = true;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setLoginTime: (state) => {
      state.loginTime = new Date().getTime();
    },
    logout: (state) => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => {
      return initialState;
    });
  },
});

// TODO export the rest of actions
export const {
  setUserId,
  setUserToken,
  setIsAuth,
  setSuccess,
  setLoginTime,
  logout,
} = authSlice.actions;
export default authSlice.reducer;
