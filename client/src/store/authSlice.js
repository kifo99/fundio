import { createSlice } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';

// const sessionDuration = parseInt(import.meta.env.SESSION_DURATION, 10);

const initialState = {
  userId: null,
  userToken: null,
  role: null,
  vendorStatus: null,
  isAuth: false,
  error: null,
  success: false,
  loginTime: null,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { token, user } = action.payload;

      state.userToken = token;
      state.userId = user.id;
      state.role = user.role;
      state.vendorStatus = user.vendorStatus ?? null;
      state.isAuth = true;
      state.success = true;
      state.error = null;
      state.loginTime = Date.now();
    },

    setError: (state, action) => {
      state.error = action.payload;
      state.success = false;
    },
    clearError: (state) => {
      state.error = null;
    },
    logout: () => {
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
export const { setCredentials, setError, clearError, logout } = authSlice.actions;
export default authSlice.reducer;
