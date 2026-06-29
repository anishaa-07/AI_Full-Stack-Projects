import { FaStar } from "react-icons/fa";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">

      <div className="movie-image">

        <img
          src={movie.image}
          alt={movie.title}
        />

        <span className="rating">
          <FaStar />
          {movie.rating}
        </span>

      </div>

      <div className="movie-content">

        <span className="genre">
          {movie.genre}
        </span>

        <h3>{movie.title}</h3>

        <p>
          {movie.year} • {movie.duration}
        </p>

      </div>

    </div>
  );
};

export default MovieCard;