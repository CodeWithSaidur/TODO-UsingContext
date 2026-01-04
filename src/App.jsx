import './index.css';  
import { TodoProvider } from './context';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';

export function App() {
  return (
    <div>
      <TodoProvider>
        <TodoForm />
         <TodoList />
      </TodoProvider>
    </div>
  );
}
