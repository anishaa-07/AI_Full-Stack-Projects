const FeaturedMovie = () => {
  return (
    <section className="featured-section">
      <div className="featured-overlay">
        <div className="featured-content">
          <span>Movie of the Week</span>

          <h2>Dune: Part Two</h2>

          <p>
            Paul Atreides unites with Chani and the Fremen while seeking
            revenge against those who destroyed his family.
          </p>

          <div className="featured-buttons">
            <button className="watch-btn">▶ Watch Trailer</button>
            <button className="info-btn">More Info</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMovie;