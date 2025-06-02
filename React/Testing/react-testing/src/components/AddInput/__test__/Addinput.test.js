import { fireEvent, render, screen } from '@testing-library/react';
import AddInput from '../AddInput';

const MockedSetToDo = jest.fn()

describe(('AddInput testavimas:'), () => {
    test('resnder input elemntai:', () => {
        render(<AddInput todos={[]} setTodos={MockedSetToDo} />);
        expect(
            screen.getByPlaceholderText('Add a new task here...')
        ).toBeInTheDocument();
    });

    test('shoudl be able to type input:', () => {
        render(<AddInput todos={[]} setTodos={MockedSetToDo} />);
        const inputElement = screen.getByPlaceholderText('Add a new task here...')
        fireEvent.change(inputElement, { target: { value: 'buy water' } })
        expect(inputElement.value).toBe('buy water');
    });

    test('should be able to empty by button click:', () => {
        render(<AddInput todos={[]} setTodos={MockedSetToDo} />);
        const inputElement = screen.getByPlaceholderText('Add a new task here...')
        const buttonElement = screen.getByRole('button', { name: 'Add' })
        fireEvent.change(inputElement, { target: { value: 'buy water' } })
        fireEvent.click(buttonElement)
        expect(inputElement.value).toBe('');

    });
})


