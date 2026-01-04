import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, createTransform } from 'redux-persist';
import sessionStorage from 'redux-persist/lib/storage/session';
import storage from 'redux-persist/lib/storage';
import authReducer from '../store/authSlice.js';
import persistStore from 'redux-persist/es/persistStore';

const authTransform = createTransform(
  (saveState, key) => {
    if (!saveState || typeof saveState !== 'object') {
      return saveState;
    }
    return {
      userToken: saveState.userToken,
      isAuth: saveState.isAuth,
      userId: saveState.userId,
      savedAt: new Date().getTime(),
    };
  },
  (loadedState, key) => {
    const currentTime = new Date().getTime();
    const timer = 20 * 1000;

    if (loadedState?.savedAt && currentTime - loadedState.savedAt > timer) {
      console.log(`${key} expired`);
      return undefined;
    }

    return loadedState;
  }
);

const rootPersistConfig = {
  key: 'root',
  storage,
};

const authPersistConfig = {
  key: 'auth',
  storage: sessionStorage,
  transforms: [authTransform],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
