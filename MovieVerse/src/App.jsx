import { useEffect, useMemo, useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedMovie from "./components/FeaturedMovie";
import SearchBar from "./components/SearchBar";
import Categories from "./components/Categories";
import MovieGrid from "./components/MovieGrid";
import Footer from "./components/Footer";

import { getTrendingMovies } from "./services/api";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadMovies() {
      try {
        setLoading(true);
        const data = await getTrendingMovies();
        setMovies(data);
      } catch (err) {
        setError("Failed to load movies.");
      } finally {
        setLoading(false);
      }
    }

    loadMovies();
  }, []);

  const filteredMovies = useMemo(() => {
    return movies.filter((movie) => {
      const matchesSearch = movie.title
        .toLowerCase()
        .includes(search.toLowerCase());

      return selectedGenre === "All" && matchesSearch;
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
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
      />

      {loading ? (
        <h2 className="loading-text">Loading Movies...</h2>
      ) : error ? (
        <h2 className="loading-text">{error}</h2>
      ) : (
        <MovieGrid movies={filteredMovies} />
      )}

      <Footer />
    </div>
  );
}

export default App;