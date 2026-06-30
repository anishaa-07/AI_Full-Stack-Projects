import { FaFilm } from "react-icons/fa";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

const Navbar = () => {
  return (
    <header className="navbar">

      <div className="logo">

        <FaFilm />

        <span>MovieVerse</span>

      </div>

      <nav>

        <a href="#">Home</a>

        <a href="#">Trending</a>

        <a href="#">Popular</a>

        <a href="#">Genres</a>

      </nav>

      <button>

        <HiOutlineMagnifyingGlass />

      </button>

    </header>
  );
};

export default Navbar;