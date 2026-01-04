import React, { useState, useContext } from 'react';

export const TodoContext = React.createContext(null);

export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            todo: 'Todo 1',
            completed: false,
        },
    ]);

    const addTodo = (todo) => { };
    const updateTodo = (id, updatedTodo) => { };
    const deleteTodo = (id) => { };
    const toggleStatus = (id) => { };

    return (
        <TodoContext.Provider
            value={{ todos, addTodo, updateTodo, deleteTodo, toggleStatus }}
        >
            {children}
        </TodoContext.Provider>
    );
};

export const useTodo = () => useContext(TodoContext);
