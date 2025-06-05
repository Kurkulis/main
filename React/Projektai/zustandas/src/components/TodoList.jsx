import { useTodoStore } from "../store/store";
import Todo from "./Todo";

const TodoList = () => {

    const { todos, filter } = useTodoStore();

    const filteredTodos = todos.filter(todo =>
        filter === 'all' ? true :
            filter === 'completed' ? todo.completed :
                !todo.completed
    );

    return (
        <ul className="todo-list">
            {filteredTodos.map(todo => (
                <li key={todo.id}>
                    <Todo todo={todo} />
                </li>
            ))}

        </ul>
    )
};

export default TodoList;