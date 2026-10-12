import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Movie Explorer navigation", () => {
  render(<App />);
  expect(screen.getByText("MOVIE")).toBeInTheDocument();
  expect(screen.getByText("EXPLORER")).toBeInTheDocument();
});
