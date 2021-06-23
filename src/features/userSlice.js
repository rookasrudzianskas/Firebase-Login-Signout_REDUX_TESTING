import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  status: 'idle',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

  },
});

export const { increment, decrement } = userSlice.actions;

export default userSlice.reducer;
