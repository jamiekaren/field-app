import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link className="navbar-brand" to="/">
        Field App
      </Link>
      <Link className="navbar-brand mr-auto" to="/login">
        Login
      </Link>
      
    </nav>
  );
}

export default Nav;
