import { render, screen } from '@testing-library/react';
import TodoFooter from '../TodoFooter';
import { BrowserRouter } from 'react-router-dom';


const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
    return (
        < BrowserRouter >
            <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks}></TodoFooter>
        </ BrowserRouter>
    )
}

describe(('tsting todo footer:'), () => {
    test('kiek klaidu yra footeri:', () => {
        render(<MockTodoFooter numberOfIncompleteTasks={5} />);
        const paragraphElement = screen.getByText('5 tasks left');
        expect(paragraphElement).toBeInTheDocument();
    });
})


