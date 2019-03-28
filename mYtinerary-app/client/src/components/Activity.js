import React, { Component } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export class Activity extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activities: []
    };
  }
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
      </Slider>
    );
  }
}

// const mapStateToProps = state => ({
//   activities: state.activityReducer.activities
// });

// export default connect(
//   mapStateToProps,
//   { fetchActivities }
// )(Activity);

export default Activity;
