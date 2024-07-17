import React from "react";
import Nav from "./Nav";
import { ReactComponent as Logo } from "../Assets/logo.svg";
function Header() {
  return (
    <header>
      <Logo />
      <Nav />
    </header>
  );
}

export default Header;
