import { FaFilm } from "react-icons/fa";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

const Navbar = () => {
  return (
    <header className="navbar">

      <div className="logo">
        <FaFilm />
        <span>MovieVerse</span>
      </div>

      <nav className="nav-links">
        <a href="#">Home</a>
        <a href="#">Trending</a>
        <a href="#">Genres</a>
        <a href="#">Top Rated</a>
      </nav>

      <button className="search-btn">
        <HiOutlineMagnifyingGlass />
      </button>

    </header>
  );
};

export default Navbar;