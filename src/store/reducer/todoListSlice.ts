import {COLOR_BY_STATUS} from '@/utils/common';
import {createSlice} from '@reduxjs/toolkit';
import dayjs from 'dayjs';

export type todoListSliceTypes = {
  id: string;
  title: string;
  timeStart: string;
  timeEnd: string;
  status: string;
};

const getRandomColor = () => {
  const list: {[key: string]: string} = COLOR_BY_STATUS;
  const statuses = Object.keys(list);
  const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
  return list[randomStatus];
};

export const TODO_LIST: todoListSliceTypes[] = Array.from(
  {length: 12},
  (data, index) => ({
    id: String(index + 1),
    title: `item ${index}`,
    timeStart: dayjs().toISOString(),
    timeEnd: dayjs().toISOString(),
    status: getRandomColor(),
  }),
);

const initialState: todoListSliceTypes[] = TODO_LIST;

const todoListSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    // setTodoList: (state, {payload}) => {},
  },
});

export const {} = todoListSlice.actions;
export default todoListSlice.reducer;
