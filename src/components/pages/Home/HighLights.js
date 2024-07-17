import greekSalad from "./Assets/greek salad.jpg";
import brushetta from "./Assets/brushetta.jpg";
import lemonDesser from "./Assets/lemon dessert.jpg";
import "./HighLights.css";
import { Link } from "react-router-dom";

import { faMotorcycle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Highlights() {
  return (
    <section className="highlight-section">
      <div className="highligh-title">
        <h2>This weeks specials!</h2>
        <button>
          <Link to="/Menu">Online menu</Link>
        </button>
      </div>
      <div className="highligh-container">
        <article>
          <img src={greekSalad} alt="" width={200} height={200} />
          <div>
            <div className="title-price">
              <h2>Greek salad</h2>
              <p>$12.99</p>
            </div>
            <p>
              The famous greek salad of crispy lettuce, pepper, olives and our
              Chicago style feta cheese, garnished with cruchy garlic and
              rosemary croutons
            </p>
            <h3>
              Order a delivery <FontAwesomeIcon icon={faMotorcycle} />
            </h3>
          </div>
        </article>

        <article>
          <img src={brushetta} alt="" width={200} height={200} />
          <div>
            <div className="title-price">
              <h2>Bruchetta</h2>
              <p>$12.99</p>
            </div>
            <p>
              Our Bruschetta is made from grilled bread that has been smeared
              with garlic and seasoned with salt and olive oil
            </p>
            <h3>
              Order a delivery <FontAwesomeIcon icon={faMotorcycle} />
            </h3>
          </div>
        </article>

        <article>
          <img src={lemonDesser} alt="" />
          <div>
            <div className="title-price">
              <h2>Lemon Dessert</h2>
              <p>$12.99</p>
            </div>
            <p>
              This comes straight from grandma's recipe book every last
              ingredient has been sourced and is as authentic as can be
              imagined,
            </p>
            <h3>
              Order a delivery <FontAwesomeIcon icon={faMotorcycle} />
            </h3>
          </div>
        </article>
      </div>
    </section>
  );
}
export default Highlights;
