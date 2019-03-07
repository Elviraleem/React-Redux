import React, { Component } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import LandingPage1 from "./components/LandingPage1";
import Cities from "./components/Cities";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={LandingPage1} />
            <Route path="/Cities" component={Cities} />
            <Route path="/LogIn" component={LogIn} />
            <Route path="/SignUp" component={SignUp} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
