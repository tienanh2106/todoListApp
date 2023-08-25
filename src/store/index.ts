import {configureStore} from '@reduxjs/toolkit';
import {
  counterSlice as counterReducer,
  loginSlice as loginReducer,
  todoListSlice as todoListReducer,
} from './reducer';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    login: loginReducer,
    todoList: todoListReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
