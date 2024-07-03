import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './app/store';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import RemovedTodoList from './components/RemovedTodoList';

const App: React.FC = () => {
  const [showRemoved, setShowRemoved] = useState(false);

  return (
    <Provider store={store}>
      <div className="flex items-center justify-center min-h-screen bg-teal-500">
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
          <h1 className="text-2xl font-bold text-center text-teal-600 mb-4">ToDo List</h1>
          <AddTodo />
          <TodoList />
          <button 
            onClick={() => setShowRemoved(!showRemoved)}
            className="mt-4 bg-teal-500 text-white px-4 py-2 rounded"
          >
            {showRemoved ? 'Hide' : 'View'} Removed TODOs
          </button>
          {showRemoved && <RemovedTodoList />}
        </div>
      </div>
    </Provider>
  );
};

export default App;
