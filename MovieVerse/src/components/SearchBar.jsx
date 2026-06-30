import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

const SearchBar = ({ search, setSearch }) => {
  return (
    <section className="search-section">
      <div className="search-box">
        <HiOutlineMagnifyingGlass className="search-icon" />

        <input
          type="text"
          placeholder="Search any movie..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button>Search</button>
      </div>
    </section>
  );
};

export default SearchBar;