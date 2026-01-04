import { useState } from 'react';
import { TodoProvider } from './context';

export function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [
      ...prev,
      { ...todo, id: Date.now(), completed: false },
    ]);
  };

  const updateTodo = (id, updatedTodo) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, ...updatedTodo } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleStatus = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed } 
          : todo
      )
    );
  };

  return (
    <div>
      <TodoProvider
        value={{ todos, addTodo, updateTodo, deleteTodo, toggleStatus }}
      >
        <div>
          
        </div>
      </TodoProvider>
    </div>
  );
}
