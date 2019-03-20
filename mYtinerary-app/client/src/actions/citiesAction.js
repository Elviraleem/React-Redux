import axios from "axios";

export const FETCH_CITIES = "FETCH_CITIES";

export const fetchCities = () => dispatch => {
  console.log("fetchCities actions");
  axios
    .get("/cities")
    .then(res => {
      console.log(res.data);
      dispatch({
        type: FETCH_CITIES,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
