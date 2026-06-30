import MovieCard from "./MovieCard";

const MovieGrid = ({ movies }) => {
  return (
    <section className="movies-section">

      <div className="section-title">

        <span>Trending Collection</span>

        <h2>Trending Movies</h2>

      </div>

      <div className="movie-grid">

        {movies.length > 0 ? (

          movies.slice(0, 8).map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
            />
          ))

        ) : (

          <p className="loading-text">
            <div className="movie-grid">
  {movies.length ? (
    movies.map((movie) => (
      <MovieCard
        key={movie.id}
        movie={movie}
      />
    ))
  ) : (
    <h2 className="loading-text">
      No movies found.
    </h2>
  )}
</div>
          </p>

        )}

      </div>

    </section>
  );
};

export default MovieGrid;