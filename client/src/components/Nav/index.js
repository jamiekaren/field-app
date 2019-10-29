import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark">
      <Link className="navbar-brand" to="/">
        Field App
      </Link>
      <Link className="navbar-brand ml-auto mr-5" to="/login">
        Login
      </Link>
    </nav>
    <header className="nav2 mb-5 py-5 sticky-top mw-100%">

    </header>
    </>
  )
}

export default Nav;
