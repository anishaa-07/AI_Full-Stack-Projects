import MovieCard from "./MovieCard";

const MovieGrid = ({ movies }) => {
  return (
    <section className="movies-section">
      <div className="section-header">
        <div>
          <p>Editor's Picks</p>
          <h2>Trending Movies</h2>
        </div>

        <button className="view-all-btn">View All</button>
      </div>

      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default MovieGrid;