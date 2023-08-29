import {createSlice} from '@reduxjs/toolkit';
import React from 'react';

type modalSliceTypes = {
  isOpen: boolean;
  content: React.JSX.Element | undefined;
  button?: React.JSX.Element;
  title?: string;
  buttonType?: 'confirm' | 'success';
};

const initialState: modalSliceTypes = {
  isOpen: false,
  content: undefined,
  button: undefined,
  title: undefined,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setModal: (state, {payload}) => {
      state.isOpen = payload.isOpen;
      state.title = payload.title;
      state.content = payload.content;
      state.button = payload.button;
      state.buttonType = payload.buttonType;
    },
    setCloseModal: state => {
      state.isOpen = false;
    },
    reset: () => initialState,
  },
});

export const {setModal, setCloseModal, reset} = modalSlice.actions;
export default modalSlice.reducer;
