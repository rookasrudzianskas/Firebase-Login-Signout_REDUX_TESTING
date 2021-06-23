import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userName: null,
    userEmail: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

  },
});

export const { increment, decrement } = userSlice.actions;

export default userSlice.reducer;
