import React, { Component } from "react";
import { NavLink as Link } from "react-router-dom";
import SimpleMenu from "./SimpleMenu";
import BurgerMenu from "./BurgerMenu";

export class LandingPage2 extends Component {
  render() {
    return (
      <div>
        <SimpleMenu />
        <BurgerMenu />
        <div className="logo-title">
          <img src="./pictures/MYtineraryLogo.png" alt="logo" />
          <p>
            Find your perfect trip, designed by insiders who know and love their
            cities.
          </p>
        </div>
        <div className="start">
          <h2>Start browsing</h2>
          <Link to="/Cities">
            <img src="./pictures/circled-right-2.png" alt="circledRight" />
          </Link>
        </div>
        <div className="user-profile">
          <p>Want to build your own MYtinerary?</p>
          <div className="login-account">
            <Link to="/Login">Log in</Link>
            <Link to="/SignUp">Sign Up</Link>
          </div>
        </div>
        <div className="logo-home">
          <Link to="/">
            <img src="./pictures/homeIcon.png" alt="homeIcon" />
          </Link>
        </div>
      </div>
    );
  }
}

export default LandingPage2;
