import { configureStore } from '@reduxjs/toolkit';
import photoReducer from './reducer/photo';

export const store = configureStore({
  reducer: {
    photoReducer,
  },
});
