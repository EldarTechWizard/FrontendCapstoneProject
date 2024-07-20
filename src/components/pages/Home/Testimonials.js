import avatar1 from "./Assets/avatar1.jpg";
import avatar2 from "./Assets/avatar2.jpg";
import avatar3 from "./Assets/avatar3.jpg";
import avatar4 from "./Assets/avatar4.jpg";
import "./Testimonials.css";

import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const customers = [
  {
    name: "Sindre Fs",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum consectetur, ab, asperiores quaerat dolore quae iusto",
    image: avatar1,
  },
  {
    name: "Natalia Wilson",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus  recusandae iste eligendi quis distinctio sapiente ullam",
    image: avatar2,
  },
  {
    name: "Andrew Dick",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam magni quibusdam sint officia quod error laudantium sapiente.",
    image: avatar3,
  },
  {
    name: "Andrea Piacquadio",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit voluptate excepturi impedit! Exercitationem dicta voluptate estnemo",
    image: avatar4,
  },
];

function Card({ customer }) {
  return (
    <article className="card-testimonial">
      <img src={customer.image} alt="" />
      <h4>{customer.name}</h4>

      <blockquote>
        <p>"{customer.description}"</p>
      </blockquote>
    </article>
  );
}

function Testimonials() {
  return (
    <section className="testimonial-section">
      <div className="container grid">
        <h1>What people say about us</h1>
        <div className="testimonial-articles grid">
          {customers.map((customer) => (
            <Card customer={customer} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
