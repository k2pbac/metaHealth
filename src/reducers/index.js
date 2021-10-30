import authReducer from "./userAuth";
import loggedReducer from "./isLogged";
import registerReducer from "./registerUser";
import saveApplicationDataReducer from "./saveApplicationData";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  user: authReducer,
  isLogged: loggedReducer,
  registerUser: registerReducer,
  applicationData: saveApplicationDataReducer,
});

export default allReducers;
