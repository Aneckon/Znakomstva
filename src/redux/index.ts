import { configureStore } from '@reduxjs/toolkit';
import photoReducer from './slice/photo';
import favoriteReducer from './slice/favorite';
import selectedReducer from './slice/selected';

export const store = configureStore({
  reducer: {
    photoReducer,
    favoriteReducer,
    selectedReducer,
  },
});
