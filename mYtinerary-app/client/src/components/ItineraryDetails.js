import React from "react";

const ItineraryDetails = props => {
  console.log(props);
  console.log(props.itinerary);

  return (
    <div className="profile-container">
      <div className="profile-content">
        <div className="profile">
          <img
            className="card-image"
            src={props.itinerary.profileImage}
            alt="profile"
          />
          <p>{props.itinerary.profileName}</p>
        </div>
        <div className="itinerary-info">
          <div className="profileTitle">
            <h3>{props.itinerary.title}</h3>
          </div>
          <div className="profile-details">
            <p>likes: {props.itinerary.rating}</p>
            <p>{props.itinerary.hours} hours</p>
            <p>{props.itinerary.cost}</p>
          </div>
          <div className="hashtags">
            <p>{props.itinerary.hashtags.join(" ")}</p>
          </div>
        </div>
      </div>
      {/* <Activity itinerary={props.itinerary._id} /> */}
    </div>
  );
};

export default ItineraryDetails;
