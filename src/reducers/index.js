import authReducer from "./userAuth";
import loggedReducer from "./isLogged";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  user: authReducer,
  isLogged: loggedReducer,
});

export default allReducers;
