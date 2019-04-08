import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchActivities } from "../actions/activityAction";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export class Activity extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      activities: []
    };
  }
  componentDidMount() {
    console.log(this.props);
    this.props.fetchActivities(this.props.itinerary);
  }
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="activity-content">
        <Slider {...settings}>
          {this.props.activities.map(activity => (
            <div key={activity._id} className="activity-img">
              <h3>{activity.name}</h3>
              <img src={activity.image} alt={activity.name} />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  activities: state.activityReducer.activities
});

export default connect(
  mapStateToProps,
  { fetchActivities }
)(Activity);

// export default Activity;
