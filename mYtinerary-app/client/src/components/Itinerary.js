import React, { Component } from "react";
import { fetchItineraries } from "../actions/itineraryAction";
import { connect } from "react-redux";
import ItineraryDetails from "./ItineraryDetails";

export class Itinerary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itineraries: []
    };
  }
  componentDidMount() {
    console.log(this.props.match.params.city);
    this.itineraries = this.props.match.params;
    this.props.fetchItineraries(this.itineraries.city);
  }

  render() {
    return (
      <div>
        <h3>{this.props.match.params.city}</h3>
        <h3>Available MYtineraries:</h3>
        <div className="itinerariesList">
          {this.props.itineraries.map(itinerary => (
            <ItineraryDetails key={itinerary._id} itinerary={itinerary} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  itineraries: state.itineraryReducer.itineraries
});

export default connect(
  mapStateToProps,
  { fetchItineraries }
)(Itinerary);
