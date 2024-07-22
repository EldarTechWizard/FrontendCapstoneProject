import logoWhite from "./Assets/logo-white.png";
import "./Footer.css";
import { Link } from "react-router-dom";
import pages from "../../utils/pages";

import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const nav = Array.from(pages.values()).filter((page) => page.nav);

function Footer() {
  return (
    <footer>
      <div className="footer-content container grid">
        <img src={logoWhite} alt="" />
        <nav>
          <h3>Site map</h3>
          <ul>
            {nav.map((page, index) => (
              <li key={index}>
                <Link to={page.path}>{page.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h3>Contact</h3>
          <ul>
            <li>678 Pisa Ave, Chicago, IL 60611</li>
            <li>(312) 593-2744</li>
            <li> customer@littlelemon.com</li>
          </ul>
        </div>

        <div className="social-icons-list">
          <h3>Connect with us</h3>
          <ul>
            <li>
              <a
                href={`https://www.facebook.com`}
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
            </li>
            <li>
              <a
                href={`https://www.instagram.com`}
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
            </li>
            <li>
              <a
                href={`https://www.twitter.com`}
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
            </li>
            <li>
              <a
                href={`https://www.youtube.com`}
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faYoutube} size="lg" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
