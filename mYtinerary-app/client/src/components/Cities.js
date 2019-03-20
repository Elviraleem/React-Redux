import React, { Component } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCities } from "../actions/citiesAction";

class Cities extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: ""
    };
  }
  updateSearch = e => {
    this.setState({
      search: e.target.value
    });
  };
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
    let filteredCities = this.props.countries.filter(city => {
      return city.name
        .toLowerCase()
        .includes(this.state.search.toLocaleLowerCase());
    });
    return (
      <div>
        <Header />
        <div className="inputSearch">
          <input
            type="text"
            value={this.state.search}
            onChange={this.updateSearch}
          />
        </div>
        <div className="allCities">
          <Link to="/Cities/:id" />
          {filteredCities.map((city, index) => {
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
  countries: state.cityReducer.cities
});

export default connect(
  mapStateToProps,
  { fetchCities }
)(Cities);
