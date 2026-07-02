import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";
import { useFavorites } from "../context/FavoritesContext";

const MovieCard = ({ movie }) => {
  const { toggleFavorite, isFavorite } = useFavorites();

  const poster = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://placehold.co/500x750?text=No+Image";

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={poster} alt={movie.title} />

        <button
          className="favorite-btn"
          onClick={() => toggleFavorite(movie)}
        >
          {isFavorite(movie.id) ? (
            <FaHeart />
          ) : (
            <FaRegHeart />
          )}
        </button>
      </div>

      <div className="movie-info">
        <span>{movie.original_language.toUpperCase()}</span>

        <h3>{movie.title}</h3>

        <div className="movie-meta">
          <p>{movie.release_date}</p>

          <p>
            <FaStar />
            {movie.vote_average.toFixed(1)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;