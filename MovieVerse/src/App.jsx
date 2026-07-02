import { useEffect, useMemo, useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedMovie from "./components/FeaturedMovie";
import SearchBar from "./components/SearchBar";
import Categories from "./components/Categories";
import MovieGrid from "./components/MovieGrid";
import Footer from "./components/Footer";

import {
  getGenres,
  getTrendingMovies,
} from "./services/api";

function App() {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  const [search, setSearch] = useState("");
  const [selectedGenre, setSelectedGenre] = useState(0);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);

        const [movieData, genreData] =
          await Promise.all([
            getTrendingMovies(),
            getGenres(),
          ]);

        setMovies(movieData);
        setGenres(genreData);
      } catch (err) {
        setError("Failed to load movies.");
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  const filteredMovies = useMemo(() => {
    return movies.filter((movie) => {
      const matchesSearch = movie.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesGenre =
        selectedGenre === 0 ||
        movie.genre_ids.includes(selectedGenre);

      return matchesSearch && matchesGenre;
    });
  }, [movies, search, selectedGenre]);

  return (
    <div className="app">
      <Navbar />

      <Hero />

      <FeaturedMovie />

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <Categories
        genres={genres}
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
      />

      {loading ? (
        <h2 className="loading-text">
          Loading...
        </h2>
      ) : error ? (
        <h2 className="loading-text">
          {error}
        </h2>
      ) : (
        <MovieGrid movies={filteredMovies} />
      )}

      <Footer />
    </div>
  );
}

export default App;