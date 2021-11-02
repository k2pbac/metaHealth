//REDUCER -  how our actions transform state from one state to next state - based on action modify store
import { authConstants } from "constants/auth.constants";

const user = localStorage.getItem("isEmployee")
  ? localStorage.getItem("isEmployee")
  : false;

const authReducer = (state = user, action) => {
  switch (action.type) {
    case authConstants.EMPLOYEE_LOGIN_REQUEST:
      localStorage.setItem("isEmployee", true);
      return action.user;
    case authConstants.PATIENT_LOGIN_REQUEST:
      localStorage.setItem("isEmployee", false);
      return action.user;
    default:
      return state;
  }
};

export default authReducer;
