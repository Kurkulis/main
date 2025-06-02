import { render, screen } from '@testing-library/react';
import Header from '../Header';

test('renders same text passed into title props', () => {
    render(<Header title="my header" />);
    const header = screen.getByText(/my header/i);
    expect(header).toBeInTheDocument();
});
