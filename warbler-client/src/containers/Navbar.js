import React, { Component } from 'react';
import {Link, NavLink} from "react-router-dom";
import {connect} from "react-redux";
import logo from "../images/warbler-logo.png";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand">
        <div className="container-fluid">
            <Link to="/" className="navbar-brand">
                <img src={logo} alt="Warbler Home" />
            </Link>
        <ul className="nav navbar-nav navbar-right">
            <li>
                <NavLink to="/signup" style={{marginRight: 15}}>Sign Up</NavLink>
            </li>
            <li>
                <NavLink to="/signin">Login</NavLink>
            </li>
        </ul>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = ({currentUser}) => {
    return {
        currentUser
    };
}

export default connect(mapStateToProps, null)(Navbar);