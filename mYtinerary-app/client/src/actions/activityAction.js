import axios from "axios";

export const FETCH_ACTIVITY = "FETCH_ACTIVITY";

export const fetchActivities = itinerariesId => dispatch => {
  console.log("fetchActivities actions", itinerariesId);
  axios
    .get("/activities/" + itinerariesId)
    .then(res => {
      console.log(res.data);
      dispatch({
        type: FETCH_ACTIVITY,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
