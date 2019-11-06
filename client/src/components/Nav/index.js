import React from "react";
import { Link } from "react-router-dom";
import logo from "../../media/Amman-Imman-Logo-mobile.png";

function Nav(props) {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark">
      {/* <Link className="navbar-brand ml-auto mr-5" to="/login">
        login
      </Link> */}
     {props.token === ''  ? (<Link className="navbar-brand ml-auto mr-5" to="/login">
        Login
  </Link>) :
      (<Link onClick ={props.logOut}className="navbar-brand ml-auto mr-5" to="/">
        Logout
      </Link>)}
    </nav>
    <header className="nav2 py-5 sticky-top mw-100%">
     <a href="/"><img alt="logo" src={logo} className="ml-4" ></img> </a> 
    </header>
    </>
  )
}

export default Nav;
