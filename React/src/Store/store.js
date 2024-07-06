import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, value: 'Example Task to do now', status: 'Active' },
];

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    deleteTask: (state, action) => {
      return state.filter(task => task.id !== action.payload);
    },
    markCompleted: (state, action) => {
      const task = state.find(task => task.id === action.payload);
      if (task) {
        task.status = 'Completed';
        task.disabled = true;
      }
    },
  },
});

export const { addTask, deleteTask, markCompleted } = taskSlice.actions;

const store = configureStore({
  reducer: {
    tasks: taskSlice.reducer,
  },
});

export default store;

