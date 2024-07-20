import greekSalad from "./Assets/greek salad.jpg";
import brushetta from "./Assets/brushetta.jpg";
import lemonDessert from "./Assets/lemon dessert2.jpg";
import "./HighLights.css";
import { Link } from "react-router-dom";

import { faMotorcycle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const meals = [
  {
    name: "Greek salad",
    price: 12.99,
    image: greekSalad,
    description:
      "The famous greek salad of crispy lettuce, pepper, olives and our Chicago style feta cheese, garnished with cruchy garlic and rosemary croutons.",
  },
  {
    name: "Bruchetta",
    price: 12.99,
    image: brushetta,
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
  },
  {
    name: "Lemon Dessert",
    price: 12.99,
    image: lemonDessert,
    description:
      "This comes straight from grandma's recipe book every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];

function Card({ meal }) {
  return (
    <article className="meal-card">
      <div className="meal-card-img">
        <img src={meal.image} alt="" />
      </div>
      <div className="meal-card-header">
        <h2>{meal.name}</h2>
        <p>${meal.price}</p>
      </div>
      <div className="meal-card-footer">
        <p>{meal.description}</p>
        <h3>
          Order a delivery <FontAwesomeIcon icon={faMotorcycle} />
        </h3>
      </div>
    </article>
  );
}

function Highlights() {
  return (
    <section className="highlight-section container">
      <div className="highlight-title">
        <h2>This weeks specials!</h2>
        <Link className="button-primary" to="/Menu">
          Online menu
        </Link>
      </div>
      <div className="highlight-container grid">
        {meals.map((meal, index) => (
          <Card key={index} meal={meal} />
        ))}
      </div>
    </section>
  );
}
export default Highlights;
