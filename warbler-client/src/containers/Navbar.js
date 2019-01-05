import React, { Component } from 'react';
import {Link, NavLink} from "react-router-dom";
import {connect} from "react-redux";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand">
        <div className="container-fluid">
            <Link to="/" className="navbar-brand">
                <img src="" alt="Warbler Home" />
            </Link>
        </div>
        <ul className="nav navbar-nav navbar-right">
            <li>
                <NavLink to="/signup">Sign Up</NavLink>
            </li>
            <li>
                <NavLink to="/signin">Login</NavLink>
            </li>
        </ul>
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