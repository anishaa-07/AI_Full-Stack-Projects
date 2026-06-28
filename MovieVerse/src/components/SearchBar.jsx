import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

const SearchBar = () => {
  return (
    <section className="search-section">
      <div className="search-box">
        <HiOutlineMagnifyingGlass className="search-icon" />

        <input
          type="text"
          placeholder="Search movies, actors, genres..."
        />

        <button>Search</button>
      </div>
    </section>
  );
};

export default SearchBar;