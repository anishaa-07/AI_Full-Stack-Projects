import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

const SearchBar = () => {
  return (
    <section className="search-section">

      <div className="search-box">

        <HiOutlineMagnifyingGlass className="search-icon" />

        <input
          type="text"
          placeholder="Search movies, actors..."
        />

        <button>Search</button>

      </div>

      <div className="popular-tags">

        <span>Popular :</span>

        <button>Interstellar</button>
        <button>Dune</button>
        <button>Batman</button>
        <button>Avatar</button>
        <button>Oppenheimer</button>

      </div>

    </section>
  );
};

export default SearchBar;