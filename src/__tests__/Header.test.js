import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../components/Header";

test("displays the toggle button", () => {
  render(<Header />);
  // Use getByText or getByRole with specific text for better reliability
  expect(screen.getByRole('button', { name: /Mode/ })).toBeInTheDocument();
});

test("calls the onDarkModeClick callback prop when the button is clicked", () => {
  const onDarkModeClick = jest.fn();
  render(<Header onDarkModeClick={onDarkModeClick} />);

  // Click the button and ensure the callback is called
  fireEvent.click(screen.getByRole('button', { name: /Mode/ }));
  expect(onDarkModeClick).toHaveBeenCalled();
});
