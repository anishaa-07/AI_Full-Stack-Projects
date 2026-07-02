const genres = [
  "All",
  "Action",
  "Adventure",
  "Animation",
  "Comedy",
  "Crime",
  "Drama",
  "Fantasy",
  "Horror",
  "Sci-Fi",
  "Thriller",
];

const Categories = ({ selectedGenre, setSelectedGenre }) => {
  return (
    <section className="categories">
      <div className="section-title">
        <span>Explore</span>
        <h2>Browse Genres</h2>
      </div>

      <div className="category-container">
        {genres.map((genre) => (
          <button
            key={genre}
            className={selectedGenre === genre ? "active-category" : ""}
            onClick={() => setSelectedGenre(genre)}
          >
            {genre}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Categories;