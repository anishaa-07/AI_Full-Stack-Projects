import { FaFilm } from "react-icons/fa";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <FaFilm />
        <span>MovieVerse</span>
      </div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Trending</li>
        <li>Top Rated</li>
        <li>Upcoming</li>
      </ul>

      <button className="search-btn">
        <HiOutlineMagnifyingGlass />
      </button>
    </nav>
  );
};

export default Navbar;