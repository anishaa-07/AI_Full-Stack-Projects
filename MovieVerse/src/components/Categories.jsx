const Categories = ({
  genres,
  selectedGenre,
  setSelectedGenre,
}) => {
  return (
    <section className="categories">
      <div className="section-title">
        <span>Explore</span>
        <h2>Browse Genres</h2>
      </div>

      <div className="category-container">
        <button
          className={selectedGenre === 0 ? "active-category" : ""}
          onClick={() => setSelectedGenre(0)}
        >
          All
        </button>

        {genres.map((genre) => (
          <button
            key={genre.id}
            className={
              selectedGenre === genre.id
                ? "active-category"
                : ""
            }
            onClick={() => setSelectedGenre(genre.id)}
          >
            {genre.name}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Categories;