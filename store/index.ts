import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import testimonialsReducer from './slices/testimonialsSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    testimonials: testimonialsReducer,
  },
});

// Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
