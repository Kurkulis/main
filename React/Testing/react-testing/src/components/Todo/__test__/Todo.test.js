import { fireEvent, render, screen } from '@testing-library/react';
import Todo from '../Todo';
import { BrowserRouter } from 'react-router-dom';


const MockTodo = () => {
    return (
        < BrowserRouter >
            <Todo />
        </ BrowserRouter>
    )
}

const addTask = (tasks) => {
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", { name: /Add/i });
    tasks.forEach(task => {
        fireEvent.change(inputElement, { target: { value: task } });
        fireEvent.click(buttonElement);
    });
};



describe("Todo", () => {
    test('renders same text passed into title prop', () => {
        render(<MockTodo />);
        addTask(['Milk']);
        const divElement = screen.getByText('Milk');
        expect(divElement).toBeInTheDocument();
    });

    test('renders multiple items', () => {
        render(<MockTodo />);
        addTask(['a', 'b', 'c']);
        const divElements = screen.getAllByTestId("task-container");
        expect(divElements.length).toBe(3);
    });

    test('should not have completed tasks when initially rendered', () => {
        render(<MockTodo />);
        addTask(["Buy groceries"]);
        const divElement = screen.getByText(/Buy groceries/i);
        expect(divElement).not.toHaveClass("todo-item-active");
    });

    test('should have completed tasks when clicked', () => {
        render(<MockTodo />);
        addTask(["Buy groceries"]);
        const divElement = screen.getByText(/Buy groceries/i);
        fireEvent.click(divElement);
        expect(divElement).toHaveClass("todo-item-active");
    });

});



