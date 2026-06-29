import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { FaFire } from "react-icons/fa";

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

      <div className="trending-tags">

        <span><FaFire /> Trending</span>

        <button>Dune</button>
        <button>Batman</button>
        <button>Avatar</button>
        <button>Interstellar</button>
        <button>Oppenheimer</button>

      </div>

    </section>
  );
};

export default SearchBar;