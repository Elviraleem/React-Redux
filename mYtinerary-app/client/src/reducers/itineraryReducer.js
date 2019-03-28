import { FETCH_ITINERARIES } from "../actions/itineraryAction";

const initialState = {
  itineraries: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_ITINERARIES:
      return {
        ...state,
        itineraries: action.payload
      };
    default:
      return state;
  }
}