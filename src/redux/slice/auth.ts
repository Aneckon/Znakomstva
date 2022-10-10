import { createSlice } from '@reduxjs/toolkit';
import { Cookies } from 'react-cookie';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    user: []
  },
  reducers: {
    setUser: (state: any, action: any) => {
      state.favoriteList.push(action.payload);
      const cookies = new Cookies();
      cookies.set('User', action.payload, { path: '/', maxAge: 604800 });
    },
    setToken: (state: any, action: any) => {
      state.favoriteList = action.payload;
      const cookies = new Cookies();
      cookies.set('Token', action.payload, { path: '/', maxAge: 604800 });
    },
    removeToken: (state: any, action: any) => {
      state.favoriteList = action.payload;
      const cookies = new Cookies();
      cookies.remove('Token');
    },
  },
});

export const { setToken, setUser, removeToken } = authSlice.actions;
export default authSlice.reducer;
