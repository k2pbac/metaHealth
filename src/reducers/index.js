import authReducer from "./user-auth.reducer";
import registerReducer from "./registerUser";
import saveApplicationDataReducer from "./app-data.reducer";
import alertReducer from "./alert.reducer";
import userLoggedReducer from "./user-logged-state.reducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  userAuth: authReducer,
  userLogged: userLoggedReducer,
  registerUser: registerReducer,
  applicationData: saveApplicationDataReducer,
  alert: alertReducer,
});

export default allReducers;
