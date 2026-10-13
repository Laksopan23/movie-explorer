import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("./pages/Home", () => () => null);

jest.mock("./services/tmdbApi", () => ({
  getTrendingMovies: jest.fn(() => Promise.resolve({ results: [], total_pages: 1 })),
  getMovieGenres: jest.fn(() => Promise.resolve([])),
  searchMovies: jest.fn(() => Promise.resolve({ results: [], total_pages: 1 })),
  discoverMovies: jest.fn(() => Promise.resolve({ results: [], total_pages: 1 })),
  getPosterUrl: jest.fn(() => null),
}));

test("renders Movie Explorer navigation", () => {
  render(<App />);
  expect(screen.getByText("MOVIE")).toBeInTheDocument();
  expect(screen.getByText("EXPLORER")).toBeInTheDocument();
});
