import { FaStar } from "react-icons/fa";

const MovieCard = ({ movie }) => {
  const poster = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://placehold.co/500x750?text=No+Image";

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={poster} alt={movie.title} />

        <div className="movie-rating">
          <FaStar />
          <span>{movie.vote_average.toFixed(1)}</span>
        </div>
      </div>

      <div className="movie-info">
        <p className="movie-category">
          {movie.original_language.toUpperCase()}
        </p>

        <h3>{movie.title}</h3>

        <span>{movie.release_date}</span>
      </div>
    </div>
  );
};

export default MovieCard;