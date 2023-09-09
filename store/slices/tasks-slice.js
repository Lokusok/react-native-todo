import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    { id: 1, title: 'Сделать тест', isCompleted: false },
    { id: 2, title: 'Покормить кота', isCompleted: false },
    { id: 3, title: 'Покормить кота', isCompleted: false },
    { id: 4, title: 'Покормить кота', isCompleted: false },
    { id: 5, title: 'Покормить кота', isCompleted: false },
    { id: 6, title: 'Покормить кота', isCompleted: false },
    { id: 7, title: 'Покормить кота', isCompleted: false },
    { id: 8, title: 'Покормить кота', isCompleted: false },
    { id: 9, title: 'Покормить кота', isCompleted: false },
    { id: 10, title: 'Покормить кота', isCompleted: false },
    { id: 11, title: 'Покормить кота', isCompleted: false },
    { id: 12, title: 'Покормить кота', isCompleted: false },
    { id: 13, title: 'Посмотреть сериал', isCompleted: false },
    { id: 14, title: 'Посмотреть фильм', isCompleted: false },
    { id: 15, title: 'Прочитать книгу', isCompleted: false },
    { id: 16, title: 'Сходить в магазин', isCompleted: false },
  ],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTodo(state, action) {
      console.log(action.payload);
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
      task.isCompleted = !task.isCompleted;
    },
  },
});

export const { addTodo, removeTodo, toggleStatus } = tasksSlice.actions;

export default tasksSlice.reducer;
