import { useState } from "react";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";
import { useFavorites } from "../context/FavoritesContext";
import MovieModal from "./MovieModal";

const MovieCard = ({ movie }) => {
  const { toggleFavorite, isFavorite } = useFavorites();
  const [showModal, setShowModal] = useState(false);

  const poster = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://placehold.co/500x750?text=No+Image";

  return (
    <>
      <div
        className="movie-card"
        onClick={() => setShowModal(true)}
      >
        <div className="movie-poster">
          <img src={poster} alt={movie.title} />

          <button
            className="favorite-btn"
            onClick={(e) => {
              e.stopPropagation();
              toggleFavorite(movie);
            }}
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

      {showModal && (
        <MovieModal
          movie={movie}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default MovieCard;