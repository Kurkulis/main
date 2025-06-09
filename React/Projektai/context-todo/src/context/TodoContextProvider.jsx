import { createContext, useState } from "react";

export const TodoContext = createContext();

const TodoContextProvider = (props) => {
    const [todosState, setTodosState] = useState([]);
    const [filterState, setFilterState] = useState('all');

    const addTodo = (todo) => {
        setTodosState(prevState => [...prevState, todo]);
    }

    const toggleTodo = (id) => {
        setTodosState(prevState =>
            prevState.map(item => item.id === id ? { ...item, completed: !item.completed } : item)
        )
    }

    const setFilter = (value) => {
        setFilterState(value);
    };

    return (
        <TodoContext.Provider
            value={{
                todos: todosState,
                addTodo,
                toggleTodo,
                setFilter,
                filter: filterState
            }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider;
