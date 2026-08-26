// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders RagBond title', () => {
    render(<App />);
    const titleElement = screen.getByText(/RagBond/i);
    expect(titleElement).toBeInTheDocument();
});
