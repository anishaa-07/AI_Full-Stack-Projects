import { FaPlay } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <p className="hero-tag">NOW STREAMING</p>

        <h1>
          Experience Cinema
          <br />
          Like Never Before
        </h1>

        <p className="hero-text">
          Discover trending blockbusters, timeless classics, and hidden gems
          from around the world in one premium cinematic experience.
        </p>

        <div className="hero-buttons">
          <button className="watch-btn">
            <FaPlay />
            Watch Now
          </button>

          <button className="explore-btn">
            Explore Movies
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;