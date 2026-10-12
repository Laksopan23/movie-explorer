# Movie Explorer 🎬

A responsive movie discovery application built with React, Material UI, React Router, Axios, and the TMDb API.

## Features

- Trending movies and title search
- Movie details, genres, cast, runtime, and trailers
- Favorites saved in local storage
- Demo login and logout UI
- Light and dark themes with persistence
- Genre, year, and rating filters
- Load More pagination and optional infinite scrolling
- Loading, empty, retry, and API error states
- Responsive desktop and mobile layout

## Getting started

```powershell
npm install
```

Create `.env` in the project root:

```env
REACT_APP_TMDB_API_KEY=YOUR_TMDB_V3_API_KEY
```

Start the app with `npm start` and open `http://localhost:3000`.

## Scripts

```powershell
npm start
npm test
npm run build
```

## TMDb integration

TMDb requests are centralized in `src/services/tmdbApi.js` and use trending, search, discover, genre, and movie-detail endpoints. Movie data and imagery are provided by [The Movie Database (TMDb)](https://www.themoviedb.org/). This product is not endorsed or certified by TMDb.

## Architecture

- `components/`: reusable UI components
- `pages/`: Home, Movie Details, Favorites, and Login screens
- `services/`: TMDb API requests
- `context/`: favorites, theme, and demo user state
- `theme/`: Material UI theme configuration

The login is demonstration-only. Favorites, theme, and the last search are stored locally in the browser.

## Security

`.env` is excluded from Git, but `REACT_APP_*` values are embedded into a browser build and are visible to users. Use a backend or serverless proxy for credentials that must remain private. Never commit `.env` or confidential assessment materials.

## Testing

Automated tests cover app rendering, movie-card rendering/navigation, and demo login validation. Manual testing should also cover search, details, favorites, filters, pagination, infinite scrolling, direct routes, and mobile layouts.
