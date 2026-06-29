import MovieCard from "./MovieCard";

const movies = [
  {
    title: "Interstellar",
    year: "2014",
    duration: "2h 49m",
    genre: "Sci-Fi",
    rating: "9.2",
    image:
      "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
  },
  {
    title: "Oppenheimer",
    year: "2023",
    duration: "3h",
    genre: "Drama",
    rating: "8.8",
    image:
      "https://image.tmdb.org/t/p/w500/ptpr0kGAckfQkJeJIt8st5dglvd.jpg",
  },
  {
    title: "The Batman",
    year: "2022",
    duration: "2h 56m",
    genre: "Action",
    rating: "8.3",
    image:
      "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
  },
  {
    title: "Dune",
    year: "2021",
    duration: "2h 35m",
    genre: "Adventure",
    rating: "8.4",
    image:
      "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
  },
];

const MovieGrid = () => {
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
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default MovieGrid;