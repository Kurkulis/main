import { useContext } from "react";
import { TodoContext } from "../context/TodoContextProvider";

const Todo = ({ todo }) => {
    const { toggleTodo } = useContext(TodoContext);

    const onTodoClick = (id) => {
        toggleTodo(id);
    };

    return (
        <>
            {todo && (
                <span
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        onTodoClick(todo.id);
                    }}
                >
                    <input type="checkbox" disabled checked={todo.completed} />
                    {todo.name}
                </span>
            )}
        </>
    );
};

export default Todo;
