const FeaturedMovie = () => {
  return (
    <section className="featured">

      <div className="featured-overlay">

        <div className="featured-content">

          <span>EDITOR'S CHOICE</span>

          <h2>Dune: Part Two</h2>

          <p>
            The saga continues as Paul Atreides embraces his destiny
            among the Fremen while preparing for an epic battle that
            will decide the future of Arrakis.
          </p>

          <div className="featured-buttons">

            <button className="primary-btn">
              Watch Trailer
            </button>

            <button className="secondary-btn">
              Details
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default FeaturedMovie;