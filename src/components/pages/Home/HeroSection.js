import restaurantImage from "./Assets/restauranfood.jpg";
import "./HeroSection.css";

import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="hero-section">
      <article className="container grid">
        <div className="banner-article">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant focused on
            traditional recipes served with a modern twist.
          </p>
          <Link className="button-primary" to="/Reservations">
            Reserve a Table
          </Link>
        </div>
        <img className="hero-image" src={restaurantImage} alt="" />
      </article>
    </section>
  );
}

export default HeroSection;
