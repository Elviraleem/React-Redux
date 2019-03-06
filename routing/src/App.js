import React from "react";
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import Users from "./Users";
import Contact from "./Contact";
import Home from "./Home";
import Notfound from "./Notfound";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <NavLink exact activeClassName="active" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/users">
                Users
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/contact">
                Contact
              </NavLink>
            </li>

            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/users" component={Users} />
              <Route path="/users/:id" component={Users} />
              <Route path="/contact" component={Contact} />
              <Route component={Notfound} />
            </Switch>
          </ul>
        </div>
      </Router>
    );
  }
}

export default App;
