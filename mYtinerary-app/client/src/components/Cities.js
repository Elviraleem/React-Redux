import React, { Component } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCities } from "../actions/citiesAction";

class Cities extends Component {
  componentDidMount() {
    console.log("IN");
    this.props.fetchCities();
    console.log(this.props);
    // axios
    //   .get("/cities")
    //   .then(city => {
    //     console.log(city);
    //     this.setState({ cities: city.data });
    //   })
    //   .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <Header />
        <div className="allCities">
          {this.props.cities.cities.map((city, index) => {
            return (
              <div className="oneCity" key={index}>
                {city.name}
              </div>
            );
          })}
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

const mapStateToProps = state => ({
  cities: state.cityReducer
});

export default connect(
  mapStateToProps,
  { fetchCities }
)(Cities);
