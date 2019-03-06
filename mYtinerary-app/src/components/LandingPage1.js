import React, { Component } from "react";

export class LandingPage1 extends Component {
  render() {
    return (
      <div>
        <div className="logo-title">
          <img src="./pictures/MYtineraryLogo.png" />
          <p>
            Find your perfect trip, designed by insiders who know and love their
            cities.
          </p>
        </div>
        <div className="start">
          <h2>Start browsing</h2>
          <img src="./pictures/circled-right-2.png" />
        </div>
        <div className="user-profile">
          <p>Want to build your own MYtinerary?</p>
          <div className="login-account">
            <a href="#">Log in</a>
            <a href="#">Create Account</a>
          </div>
        </div>
        <div className="logo-home">
          <img src="./pictures/homeIcon.png" />
        </div>
      </div>
    );
  }
}

export default LandingPage1;
