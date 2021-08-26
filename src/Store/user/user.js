import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userObj: null,
  },
  reducers: {
    updateUser: (state, {payload}) => {
      state.userObj = payload;
    },
    logoutUser: state => {
      state.userObj = null;
      AsyncStorage.clear();
    },
  },
});

// Action creators are generated for each case reducer function
export const {updateUser, logoutUser} = userSlice.actions;

export default userSlice.reducer;
