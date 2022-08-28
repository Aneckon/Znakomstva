import { createSlice } from '@reduxjs/toolkit';

const photoSlice = createSlice({
  name: 'photo',
  initialState: {
    photoList: [],
  },
  reducers: {
    addPhoto: (state: any, action: any) => {
      state.photoList.push(action.payload);
    },
  },
});

export const { addPhoto } = photoSlice.actions;
export default photoSlice.reducer;
