import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

it("Renders App component", () => {
  render(<App />);
  const heading = screen.getByRole("heading");
  expect(heading).toHaveTextContent(/Temperature Converter/i);
});

it("Calculates temperature in Kelvin", () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/Temp in °C/i);
  userEvent.type(input, "12");
  expect(screen.getByText(/285.15K/i)).toBeInTheDocument();
  expect(screen.getByText(/53.6°F/i)).toBeInTheDocument();
});
