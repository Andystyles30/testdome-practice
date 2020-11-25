import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('full app rendering/navigating', () => {
  render(<App />);
  expect(screen.getByText(/you are home/i)).toBeInTheDocument();

  const leftClick = { button: 0 };
  userEvent.click(screen.getByText(/Text Input Component/i), leftClick);

  // check that the content changed to the new page
  expect(
    screen.getByText(/you are on the text input page/i)
  ).toBeInTheDocument();
});
