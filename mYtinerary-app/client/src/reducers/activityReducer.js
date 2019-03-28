import { FETCH_ACTIVITY } from "../actions/activitiesAction";

const initialState = {
  activities: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_ACTIVITY:
      return {
        ...state,
        activities: action.payload
      };
    default:
      return state;
  }
}
