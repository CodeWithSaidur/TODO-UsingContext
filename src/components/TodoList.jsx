import { useTodo } from '../context';

export function TodoList() {
    const { todos, toggleStatus, deleteTodo } = useTodo();

    if (todos.length === 0) {
        return <div>No todos in localStorage yet.</div>;
    }

    return (
        <div>
            <h2>Your Todos (from localStorage):</h2>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => toggleStatus(todo.id)}
                        />
                        <span style={{
                            textDecoration: todo.completed ? 'line-through' : 'none',
                            opacity: todo.completed ? 0.6 : 1
                        }}>
                            {todo.todo}
                        </span>
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
