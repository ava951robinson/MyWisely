import { render, screen } from '@testing-library/react';
import App from './App';

test('renders MyWisely header', () => {
  render(<App />);
  const headerElement = screen.getByText(/MyWisely/i);
  expect(headerElement).toBeInTheDocument();
});
