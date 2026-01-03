import React, { Children } from 'react';

export const TodoContext = React.createContext({
    todo: [
        {
            id: 1,
            todo: "Todo 1",
            completed: false
        }
    ],
    addTodo: (id, todo) => { },
    addTodo: (id) => { },
})

export const useTodo = () => React.useContext(TodoContext)

export const TodoProvider = () => {
    return (
        <TodoContext.Provider value={{}}>
            {Children}
        </TodoContext.Provider>
    )
}



