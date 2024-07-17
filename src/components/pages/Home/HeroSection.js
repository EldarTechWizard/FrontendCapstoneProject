import restaurantImage from "./Assets/restauranfood.jpg";
import "./HeroSection.css";

function HeroSection() {
  return (
    <section className="hero-section">
      <article>
        <div className="banner-article">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurantImagefocused on
            traditional recipes served with a modern twist.
          </p>
          <button>Reserve a Table</button>
        </div>
        <div className="banner-image">
          <img src={restaurantImage} alt="" />
        </div>
      </article>
    </section>
  );
}

export default HeroSection;
