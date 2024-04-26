import { configureStore } from '@reduxjs/toolkit';
import { taskSlices } from './TaskSlice';
import { humanSlices } from './HumanSlices';
export const store = configureStore({
  reducer: {
    tasks: taskSlices.reducer,
    humans: humanSlices.reducer
  }
});
