import { createSlice, nanoid } from '@reduxjs/toolkit';

const addTask = (title) => ({
  title,
  id: nanoid(),
  completed: false,
  assignedTo: ''
});

const initialState = [
  addTask('First Task'),
  addTask('Second Task'),
  addTask('Third Task')
];

export const taskSlices = createSlice({
  name: 'tasks',
  initialState: initialState,
  reducers: {
    addTask(state, action) {
      state.push(addTask(action.payload));
    },
    toggleTask(state, action) {
      const task = state.find((task) => task.id === action.payload.taskId);
      task.completed = action.payload.completed;
    },
    assignedToUser(state, action) {
      const task = state.find((task) => task.id === action.payload.taskId);
      task.assignedTo = action.payload.assignedTo;
    }
  }
});
