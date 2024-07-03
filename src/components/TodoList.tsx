import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import TodoItem from './TodoItem';

const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);

  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <TodoItem key={todo.id} id={todo.id} text={todo.text} />
      ))}
    </ul>
  );
};

export default TodoList;
