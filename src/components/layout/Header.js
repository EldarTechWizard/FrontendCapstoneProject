import { useState } from "react";
import Logo from "./Assets/logo.jpg";
import { Link, useLocation } from "react-router-dom";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import pages from "../../utils/pages";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const nav = Array.from(pages.values()).filter((page) => page.nav);

function Header() {
  const [expanded, setExpanded] = useState(false);
  const { pathname } = useLocation();

  return (
    <header>
      <nav className="grid container nav-bar">
        <Link className="nav-bar-logo" to="/">
          <img src={Logo} alt="" />
        </Link>
        {console.log(pathname)}
        <button className="nav-button" onClick={() => setExpanded(!expanded)}>
          {expanded ? (
            <FontAwesomeIcon icon={faXmark} size="2x" />
          ) : (
            <FontAwesomeIcon icon={faBars} size="2x" />
          )}
        </button>
        <ul className={expanded ? "nav-bar-links expanded" : "nav-bar-links"}>
          {nav.map((page, index) => (
            <li key={index}>
              <Link
                className={pathname === page.path ? "current-link" : ""}
                to={page.path}
              >
                {page.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
