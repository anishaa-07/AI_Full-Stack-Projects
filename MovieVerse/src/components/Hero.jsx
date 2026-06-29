import { FaPlay } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

const Hero = () => {
  return (
    <section className="hero">

      <div className="hero-left">

        <span className="hero-badge">
          🎬 Featured This Week
        </span>

        <h1>
          Discover
          <br />
          Stories Worth
          <br />
          Watching.
        </h1>

        <p>
          Dive into award-winning movies, timeless classics, and
          unforgettable adventures curated for every cinema lover.
        </p>

        <div className="hero-buttons">

          <button className="watch-btn">
            <FaPlay />
            Watch Trailer
          </button>

          <button className="explore-btn">
            Explore
            <HiArrowRight />
          </button>

        </div>

      </div>

      <div className="hero-right">

        <div className="featured-card">

          <img
            src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=700&q=80"
            alt="Featured Movie"
          />

          <div className="featured-info">

            <span>SCI-FI • DRAMA</span>

            <h2>Interstellar</h2>

            <p>
              ★ 9.2 &nbsp; • &nbsp; 2h 49m
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;