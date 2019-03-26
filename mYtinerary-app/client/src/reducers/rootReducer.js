import { combineReducers } from "redux";
import cityReducer from "./cityReducer";
import itineraryReducer from "./itineraryReducer";

export default combineReducers({
  cityReducer,
  itineraryReducer
});
