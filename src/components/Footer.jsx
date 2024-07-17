import logoWhite from "../Assets/logo-white.png";

import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <footer>
      <div>
        <img src={logoWhite} alt="" />
        <div>
          <h3>Site map</h3>
          <ul>
            <li>
              <a href="#a">Home</a>
            </li>
            <li>
              <a href="#a">About</a>
            </li>
            <li>
              <a href="#a">Menu</a>
            </li>
            <li>
              <a href="#a">Reservations</a>
            </li>
            <li>
              <a href="#a">Order Online</a>
            </li>
            <li>
              <a href="#a">Login</a>
            </li>
          </ul>
        </div>
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
              <a href="www.facebook.com">
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
            </li>
            <li>
              <a href="www.instagram.com">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
            </li>
            <li>
              <a href="www.twitter.com">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
            </li>
            <li>
              <a href="www.youtube.com">
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
