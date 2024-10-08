// src/app/store.ts

import {configureStore} from '@reduxjs/toolkit';
import themeReducer from './slices/theme/themeSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer, // Add the theme slice to the store
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
