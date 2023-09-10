import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    { id: 1, title: 'Сделать тест', isCompleted: false },
    { id: 2, title: 'Покормить кота', isCompleted: false },
    { id: 3, title: 'Посмотреть сериал', isCompleted: false },
    { id: 4, title: 'Посмотреть фильм', isCompleted: false },
    { id: 5, title: 'Прочитать книгу', isCompleted: false },
    { id: 6, title: 'Сходить в магазин', isCompleted: false },
  ],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTodo(state, action) {
      state.items.push(action.payload);
    },

    removeTodo(state, action) {
      state.items.splice(
        state.items.findIndex((item) => item.id === action.payload),
        1
      );
    },

    toggleStatus(state, action) {
      const task = state.items.find((item) => item.id === action.payload);

      if (!task) {
        return;
      }

      task.isCompleted = !task.isCompleted;
    },
  },
});

export const { addTodo, removeTodo, toggleStatus } = tasksSlice.actions;

export default tasksSlice.reducer;
