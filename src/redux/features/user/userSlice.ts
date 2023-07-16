import { createSlice } from '@reduxjs/toolkit';

interface IUserState {
  user: {
    email: string | null;
  };
}
const initialState: IUserState = {
  user: {
    email: null,
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLoginUser: (state, action) => {
      state.user.email = action.payload;
    },
    setLogoutUser: (state) => {
      state.user.email = null;
    },
  },
});

export const { setLoginUser, setLogoutUser } = userSlice.actions;

export default userSlice.reducer;
