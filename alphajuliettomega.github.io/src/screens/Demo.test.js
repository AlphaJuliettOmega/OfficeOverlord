import { render, screen } from '@testing-library/react';
import Demo from './Demo';

test('renders Demo', () => {
  render(<Demo />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
