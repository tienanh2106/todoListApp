import {configureStore} from '@reduxjs/toolkit';
import {
  modalSlice as modalReducer,
  loginSlice as loginReducer,
  todoListSlice as todoListReducer,
} from './reducer';

const store = configureStore({
  reducer: {
    modal: modalReducer,
    login: loginReducer,
    todoList: todoListReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
