import { createSlice } from '@reduxjs/toolkit';

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    favoriteList: [],
  },
  reducers: {
    addFavorite: (state: any, action: any) => {
      state.favoriteList.push(action.payload);
    },
    removeFavorite: (state: any, action: any) => {
      state.favoriteList = state.favoriteList.filter((item: any) => item.id !== action.payload.id);
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
