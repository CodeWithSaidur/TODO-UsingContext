import React, { useState, useContext, useEffect } from 'react';

export const TodoContext = React.createContext(null);

export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const saved = localStorage.getItem('todos');
        if (saved) {
            setTodos(JSON.parse(saved));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

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
        <TodoContext.Provider
            value={{ todos, addTodo, updateTodo, deleteTodo, toggleStatus }}
        >
            {children}
        </TodoContext.Provider>
    );
};

export const useTodo = () => useContext(TodoContext);
