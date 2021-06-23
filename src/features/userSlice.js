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
    },
      setUserLogOutState: state => {
        // this sets the initial state to something
        state.userName = null;
        state.userEmail = null;
      }
  },
});

export const { setActiveUser, setUserLogOutState } = userSlice.actions;

export const selectUserName = state => state.user.userName;

export default userSlice.reducer;
