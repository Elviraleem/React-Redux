import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import LandingPage2 from "./components/LandingPage2";
import Cities from "./components/Cities";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import Itinerary from "./components/Itinerary";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={LandingPage2} />
            <Route exact path="/Cities" component={Cities} />
            <Route path="/Cities/:city" component={Itinerary} />

            <Route path="/LogIn" component={LogIn} />
            <Route path="/SignUp" component={SignUp} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
