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

  useEffect(() => {
    async function loadMovies() {
      try {
        const data = await getTrendingMovies();
        setMovies(data);
      } catch (err) {
        console.error(err);
      }
    }

    loadMovies();
  }, []);

  const filteredMovies = useMemo(() => {
    return movies.filter((movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [movies, search]);

  return (
    <div className="app">
      <Navbar />
<Hero />

<FeaturedMovie />

<SearchBar
search={search}
setSearch={setSearch}
/>

<Categories />

<MovieGrid movies={filteredMovies} />

<Footer />
    </div>
  );
}

export default App;