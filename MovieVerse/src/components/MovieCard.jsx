import { FaStar } from "react-icons/fa";

const MovieCard = () => {
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600"
          alt="Movie"
        />

        <div className="movie-rating">
          <FaStar />
          <span>8.9</span>
        </div>
      </div>

      <div className="movie-info">
        <p className="movie-category">SCI-FI • ACTION</p>

        <h3>Interstellar</h3>

        <span>2014 • 2h 49m</span>
      </div>
    </div>
  );
};

export default MovieCard;