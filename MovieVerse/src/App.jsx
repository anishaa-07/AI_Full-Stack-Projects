import { useEffect, useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import MovieGrid from "./components/MovieGrid";
import Footer from "./components/Footer";

import { getTrendingMovies } from "./services/api";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const results = await getTrendingMovies();
        setMovies(results);
      } catch (err) {
        console.error(err);
      }
    };

    loadMovies();
  }, []);

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <SearchBar />
      <MovieGrid movies={movies} />
      <Footer />
    </div>
  );
}

export default App;