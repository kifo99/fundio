import { createSlice } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';

const initialState = {
  userId: null,
  role: null,
  vendorStatus: null,
  isAuth: false,
  error: null,
  success: false,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { user } = action.payload;

      state.userId = user.id;
      state.role = user.role;
      state.vendorStatus = user.vendorStatus ?? null;
      state.isAuth = true;
      state.success = true;
      state.error = null;
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

export const { setCredentials, setError, clearError, logout } = authSlice.actions;
export default authSlice.reducer;
