import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

const RemovedTodoList: React.FC = () => {
  const removedTodos = useSelector((state: RootState) => state.todos.removedTodos);

  return (
    <ul className="mt-4 space-y-2">
      {removedTodos.length === 0 ? (
        <li className="text-center text-gray-500">No removed TODOs</li>
      ) : (
        removedTodos.map((todo) => (
          <li key={todo.id} className="flex items-center justify-between p-3 border rounded mb-2">
            <span className="line-through">{todo.text}</span>
          </li>
        ))
      )}
    </ul>
  );
};

export default RemovedTodoList;
