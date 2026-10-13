// Centralized TMDb client. All endpoints and credential handling live here for consistency.
import axios from "axios";

const tmdbApi = axios.create({ baseURL: "https://api.themoviedb.org/3", timeout: 10000 });
tmdbApi.interceptors.request.use((config) => {
  const key = process.env.REACT_APP_TMDB_API_KEY;
  const token = process.env.REACT_APP_TMDB_READ_ACCESS_TOKEN;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  } else if (key) {
    config.params = { ...config.params, api_key: key };
  } else {
    return Promise.reject(new Error("TMDb credentials are missing. Check your .env file."));
  }
  return config;
});
export const getTrendingMovies = (page = 1, signal) => tmdbApi.get("/trending/movie/week", { params: { page }, signal }).then((r) => r.data);
export const searchMovies = (query, page = 1, signal) => tmdbApi.get("/search/movie", { params: { query, page, include_adult: false }, signal }).then((r) => r.data);
export const discoverMovies = (filters = {}, page = 1, signal) => { const params = { page, include_adult: false, sort_by: "popularity.desc" }; if (filters.genre) params.with_genres = filters.genre; if (filters.year) params.primary_release_year = filters.year; if (Number(filters.rating) > 0) { params["vote_average.gte"] = Number(filters.rating); params["vote_count.gte"] = 100; } return tmdbApi.get("/discover/movie", { params, signal }).then((r) => r.data); };
export const getMovieGenres = (signal) => tmdbApi.get("/genre/movie/list", { signal }).then((r) => r.data.genres);
export const getMovieDetails = (id) => tmdbApi.get(`/movie/${id}`, { params: { append_to_response: "credits,videos" } }).then((r) => r.data);
export const getPosterUrl = (path) => path ? `https://image.tmdb.org/t/p/w500${path}` : null;


