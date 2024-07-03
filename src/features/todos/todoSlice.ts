import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodosState {
  todos: Todo[];
  removedTodos: Todo[];
}

const initialState: TodosState = {
  todos: [],
  removedTodos: [],
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: Todo = {
        id: state.todos.length ? state.todos[state.todos.length - 1].id + 1 : 1,
        text: action.payload,
        completed: false,
      };
      state.todos.push(newTodo);
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      const todoIndex = state.todos.findIndex(todo => todo.id === action.payload);
      if (todoIndex > -1) {
        const [removedTodo] = state.todos.splice(todoIndex, 1);
        state.removedTodos.push(removedTodo);
      }
    },
  },
});

export const { addTodo, removeTodo } = todosSlice.actions;

export default todosSlice.reducer;
