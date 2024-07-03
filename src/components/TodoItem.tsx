import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo } from '../features/todos/todoSlice';

interface TodoItemProps {
  id: number;
  text: string;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, text }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeTodo(id));
  };

  return (
    <li className="flex items-center justify-between p-3 border rounded mb-2">
      <span>{text}</span>
      <button 
        onClick={handleRemove} 
        className="bg-red-500 text-white px-3 py-1 rounded"
      >
        Remove
      </button>
    </li>
  );
};

export default TodoItem;
