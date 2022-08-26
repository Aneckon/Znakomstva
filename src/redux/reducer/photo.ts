import { createSlice } from '@reduxjs/toolkit';

const photoSlice = createSlice({
  name: 'photo',
  initialState: {
    photoList: [],
  },
  reducers: {
    setPhoto: (state: any, action: any) => {
      state.photoList.push(action.payload);
    },
  },
});

export const { setPhoto } = photoSlice.actions;
export default photoSlice.reducer;
