import { configureStore } from '@reduxjs/toolkit';
import photoReducer from './slice/photo';
import favoriteReducer from './slice/favorite';
import authReducer from './slice/auth';
import selectedReducer from './slice/selected';

import { authApi } from './services';

export const store = configureStore({
  reducer: {
    photoReducer,
    favoriteReducer,
    selectedReducer,
    authReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware),
});
