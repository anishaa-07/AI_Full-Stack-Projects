const categories = [
  "Action",
  "Adventure",
  "Comedy",
  "Drama",
  "Horror",
  "Sci-Fi",
  "Animation",
  "Thriller",
];

const Categories = () => {
  return (
    <section className="categories">
      <h2>Browse by Genre</h2>

      <div className="category-grid">
        {categories.map((category) => (
          <button key={category}>{category}</button>
        ))}
      </div>
    </section>
  );
};

export default Categories;