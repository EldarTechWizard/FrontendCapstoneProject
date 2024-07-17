import avatar1 from "../Assets/avatar1.jpg";
import avatar2 from "../Assets/avatar2.jpg";
import avatar3 from "../Assets/avatar3.jpg";
import avatar4 from "../Assets/avatar4.jpg";

import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Testimonials() {
  return (
    <section className="testimonial-section">
      <div>
        <h1>What people say about us</h1>
        <div className="testimonial-articles">
          <article>
            <div>
              <img src={avatar1} alt="" />
              <p>Sindre Fs</p>
            </div>
            <p>
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatum consectetur, ab, asperiores quaerat dolore quae iusto"
            </p>
          </article>
          <article>
            <div>
              <img src={avatar2} alt="" />
              <p>Natalia Wilson</p>
            </div>
            <p>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              recusandae iste eligendi quis distinctio sapiente ullam"
            </p>
          </article>
          <article>
            <div>
              <img src={avatar3} alt="" />
              <p>Andrew Dick</p>
            </div>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quisquam magni quibusdam sint officia quod error laudantium
              sapiente."
            </p>
          </article>
          <article>
            <div>
              <img src={avatar4} alt="" />
              <p>Andrea Piacquadio</p>
            </div>
            <p>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              voluptate excepturi impedit! Exercitationem dicta voluptate est
              nemo"
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
