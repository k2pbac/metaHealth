import authReducer from "./userAuth";
import loggedReducer from "./isLogged";
import registerReducer from "./registerUser";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  user: authReducer,
  isLogged: loggedReducer,
  registerUser: registerReducer,
});

export default allReducers;
