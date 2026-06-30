import { FaStar } from "react-icons/fa";

const MovieCard = ({ movie }) => {

  const image = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://placehold.co/500x750?text=No+Image";

  return (
    <div className="movie-card">

      <img
        src={image}
        alt={movie.title}
      />

      <div className="movie-details">

        <span className="movie-language">
          {movie.original_language.toUpperCase()}
        </span>

        <h3>
          {movie.title}
        </h3>

        <div className="movie-bottom">

          <span>
            {movie.release_date}
          </span>

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