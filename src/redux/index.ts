import { configureStore } from '@reduxjs/toolkit';
import photoReducer from './slice/photo';
import favoriteReducer from './slice/favorite';

export const store = configureStore({
  reducer: {
    photoReducer,
    favoriteReducer,
  },
});
