import React, { Component } from "react";
import axios from "axios";

export default class Cities extends Component {
  constructor() {
    super();
    this.state = {
      cities: []
    };
  }
  componentDidMount() {
    axios
      .get("/cities")
      .then(city => {
        console.log(city);
        this.setState({ cities: city.data });
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.cities.map((city, index) => {
            return <li key={index}>{city.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}
