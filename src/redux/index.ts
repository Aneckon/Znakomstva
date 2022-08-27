import { configureStore } from '@reduxjs/toolkit';
import photoReducer from './reducer/photo';
import favoriteReducer from './reducer/favorite';

export const store = configureStore({
  reducer: {
    photoReducer,
    favoriteReducer,
  },
});
