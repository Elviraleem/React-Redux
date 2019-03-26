import axios from "axios";

export const FETCH_ITINERARIES = "FETCH_ITINERARIES";

export const fetchItineraries = cityName => dispatch => {
  console.log("fetchItineraries actions", cityName);
  axios
    .get("/itineraries/" + cityName)
    .then(res => {
      console.log(res.data);
      dispatch({
        type: FETCH_ITINERARIES,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
