import { useTodoStore } from "../store/store";

const Todo = ({ todo }) => {
    const { toggleTodo } = useTodoStore();
    const onTodoClick = () => toggleTodo(todo.id);

    return (
        <>
            {todo && (
                <span onClick={() => onTodoClick(todo.id)}>
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        disabled />
                    {todo.name}
                </span>
            )}
        </>
    )
};

export default Todo;