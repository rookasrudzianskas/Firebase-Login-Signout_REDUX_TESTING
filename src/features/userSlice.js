import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userName: null,
    userEmail: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setActiveUser: (state, action) => {
        // this adds the username to the initial state
        state.userName = action.payload.username;
        state.userEmail = action.payload.userEmail;
    }
  },
});

export const { increment, decrement } = userSlice.actions;

export default userSlice.reducer;
