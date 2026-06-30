import { FaPlay } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

const Hero = () => {
  return (
    <section className="hero">

      <div className="hero-left">

        <span className="hero-badge">
          Featured Collection
        </span>

        <h1>
          Discover
          <br />
          Extraordinary
          <br />
          Cinema
        </h1>

        <p>
          Explore award-winning films, timeless classics,
          and blockbuster adventures with a premium
          cinematic experience.
        </p>

        <div className="hero-buttons">

          <button className="primary-btn">
            <FaPlay />
            Watch Trailer
          </button>

          <button className="secondary-btn">
            Explore
            <HiArrowRight />
          </button>

        </div>

      </div>

      <div className="hero-right">

        <div className="featured-card">

          <img
            src="https://image.tmdb.org/t/p/w780/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
            alt="Interstellar"
          />

          <div className="featured-content">

            <span>SCI-FI • DRAMA</span>

            <h2>Interstellar</h2>

            <p>⭐ 9.2 • 2h 49m</p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;