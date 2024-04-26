import { createSlice, nanoid } from '@reduxjs/toolkit';
import { taskSlices } from './TaskSlice';

const addHuman = (name) => ({
  name,
  id: nanoid(),
  taskIds: []
});
const initialState = [
  addHuman('First Human'),
  addHuman('Second Human'),
  addHuman('Third Human')
];
export const humanSlices = createSlice({
  name: 'humans',
  initialState: initialState,
  reducers: {
    addHuman(state, action) {
      state.push(addHuman(action.payload));
    }
  },
  extraReducers: (builder) => {
    builder.addCase(taskSlices.actions.assignedToUser, (state, action) => {
      for (const human of state) {
        if (human.id === action.payload.userId) {
          human.taskIds.push(action.payload.taskId);
        } else {
          human.taskIds = human.taskIds.filter(
            (taskId) => taskId !== action.payload.taskId
          );
        }
      }
    });
  }
});
