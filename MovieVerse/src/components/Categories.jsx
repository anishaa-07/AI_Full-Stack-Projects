import genres from "../data/genres";

const Categories = () => {
  return (
    <section className="categories">

      <div className="section-title">

        <span>Explore</span>

        <h2>Browse Genres</h2>

      </div>

      <div className="category-container">

        {genres.map((genre) => (

          <button key={genre}>
            {genre}
          </button>

        ))}

      </div>

    </section>
  );
};

export default Categories;