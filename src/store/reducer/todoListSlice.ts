import {createSlice} from '@reduxjs/toolkit';
import dayjs from 'dayjs';

export type todoListSliceTypes = {
  id: string;
  title: string;
  timeStart: string;
  timeEnd: string;
  status: string;
};

export const TODO_LIST: todoListSliceTypes[] = Array.from(
  {length: 12},
  (data, index) => ({
    id: String(index + 1),
    title: `item ${index}`,
    timeStart: dayjs().toISOString(),
    timeEnd: dayjs().toISOString(),
    status: '',
  }),
);

const initialState: todoListSliceTypes[] = TODO_LIST;

const todoListSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // setTodoList: (state, {payload}) => {},
  },
});

export const {} = todoListSlice.actions;
export default todoListSlice.reducer;
