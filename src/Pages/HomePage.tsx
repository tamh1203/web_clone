import headphone from './../assets/image/a205aaa5ac2c75342801e683c3b78ea2fff8913b-600x600.webp';
const HomePage = () => {
  return (
    <div>
      <div className="main-container">
        <div className="banner-container">
          <p className="beats-solo">Beats solo air</p>
          <h3>Summer sale</h3>
          <h1>SMILE</h1>
          <img className="hero-banner-image" src={headphone} alt="headphones" />
          <button>Shop now</button>
          <div className="des">
            <h4>Description</h4>
            <p>Supa Cool hedphones best in the market</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
