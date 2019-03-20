import { FETCH_CITIES } from "../actions/citiesAction";

const initialState = {
  cities: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_CITIES:
      return {
        ...state,
        cities: action.payload
      };
    default:
      return state;
  }
}
