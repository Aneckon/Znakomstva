import { createSlice } from '@reduxjs/toolkit';

const selectedSlice = createSlice({
  name: 'selected',
  initialState: {
    selectedList: [],
  },
  reducers: {
    addSelected: (state: any, action: any) => {
      state.selectedList.push(action.payload);
    },
    removeSelected: (state: any, action: any) => {
      state.selectedList = state.selectedList.filter((item: any) => item.id !== action.payload.id);
    },
  },
});

export const { addSelected, removeSelected } = selectedSlice.actions;
export default selectedSlice.reducer;
