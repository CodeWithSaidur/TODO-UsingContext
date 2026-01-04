import { useState } from 'react';
import { useTodo } from '../context';

export function TodoForm() {
    const [inputValue, setInputValue] = useState('');
    const { addTodo } = useTodo();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim() === '') return;

        addTodo({ todo: inputValue.trim() });
        setInputValue('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter a new todo..."
            />
            <button type="submit">Add Todo</button>
        </form>
    );
}
