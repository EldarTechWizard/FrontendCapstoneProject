import restaurantImage from "./Assets/restauranfood.jpg";
import "./HeroSection.css";

import { Link } from "react-router-dom";

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
          <button>
            <Link to="/Reservations">Reserve a Table</Link>
          </button>
        </div>
        <div className="banner-image">
          <img src={restaurantImage} alt="" />
        </div>
      </article>
    </section>
  );
}

export default HeroSection;
