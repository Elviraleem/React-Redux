import React, { Component } from "react";
import { fetchItineraries } from "../actions/itineraryAction";
import { connect } from "react-redux";
import ItineraryDetails from "./ItineraryDetails";
import Activity from "./Activity";
import Header from "./Header";

export class Itinerary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itineraries: [],
      isOpened: ""
    };
  }

  toggle = e => {
    console.log(e.target.id);

    this.setState({
      isOpened: e.target.id
    });
  };

  componentDidMount() {
    console.log(this.props.match.params.city);
    this.itineraries = this.props.match.params;
    this.props.fetchItineraries(this.itineraries.city);
  }

  render() {
    const { isOpened } = this.state;
    const textValue = isOpened ? "Close" : "View";
    return (
      <div>
        <Header />
        <h2 className="city-name">{this.props.match.params.city}</h2>
        <h3 className="itinerariesList-title">Available MYtineraries:</h3>
        <div className="itinerariesList">
          {this.props.itineraries.map(itinerary => (
            <div key={itinerary._id}>
              <div>
                <ItineraryDetails itinerary={itinerary} />
              </div>
              <div className="activity-container">
                {this.state.isOpened === itinerary._id ? (
                  <React.Fragment>
                    <Activity itinerary={itinerary._id} />
                    <button
                      className="closed-btn"
                      id={""}
                      onClick={this.toggle}
                    >
                      Close
                    </button>
                  </React.Fragment>
                ) : (
                  <button id={itinerary._id} onClick={this.toggle}>
                    View all
                  </button>
                )}
              </div>
            </div>
          ))}
          <div />
        </div>

        <div />
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
