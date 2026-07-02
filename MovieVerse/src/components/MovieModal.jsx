const MovieModal = ({ movie, onClose }) => {
  if (!movie) return null;

  const poster = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://placehold.co/500x750?text=No+Image";

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="movie-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={poster} alt={movie.title} />

        <div className="modal-content">
          <h2>{movie.title}</h2>

          <p>{movie.overview || "No description available."}</p>

          <div className="modal-meta">
            <span>⭐ {movie.vote_average.toFixed(1)}</span>
            <span>📅 {movie.release_date}</span>
            <span>🌍 {movie.original_language.toUpperCase()}</span>
          </div>

          <button onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;