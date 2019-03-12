import React, { Component } from "react";
import BurgerMenu from "./BurgerMenu";
import SimpleMenu from "./SimpleMenu";

export class Header extends Component {
  render() {
    return (
      <div>
        <BurgerMenu />
        <SimpleMenu />
      </div>
    );
  }
}

export default Header;
