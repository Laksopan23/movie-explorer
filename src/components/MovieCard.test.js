import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import MovieCard from "./MovieCard";
jest.mock("../context/AppContext", () => ({ useApp: () => ({ isFavorite: () => false, toggleFavorite: jest.fn() }) }));
const movie = { id: 157336, title: "Interstellar", year: "2014", rating: "8.7", poster: null };
test("renders movie title and year", () => { render(<MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}><MovieCard movie={movie}/></MemoryRouter>); expect(screen.getByText("Interstellar")).toBeInTheDocument(); expect(screen.getByText("2014")).toBeInTheDocument(); });
test("links to movie details", () => { render(<MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}><MovieCard movie={movie}/></MemoryRouter>); expect(screen.getByRole("link", { name: "Interstellar" })).toHaveAttribute("href", "/movie/157336"); });
