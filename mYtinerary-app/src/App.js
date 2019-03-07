import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faIgloo } from "@fortawesome/free-solid-svg-icons";
import { Route, BrowserRouter as Router } from "react-router-dom";
import LandingPage2 from "./components/LandingPage2";
import Cities from "./components/Cities";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";

library.add(faIgloo);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={LandingPage2} />
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
