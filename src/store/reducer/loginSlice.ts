import {createSlice} from '@reduxjs/toolkit';

type loginSliceTypes = {
  isLogin: boolean;
};

const initialState: loginSliceTypes = {
  isLogin: false,
};

const loginSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setLogin: (state, {payload}) => {
      state.isLogin = payload.isLogin;
    },
  },
});

export const {setLogin} = loginSlice.actions;
export default loginSlice.reducer;
