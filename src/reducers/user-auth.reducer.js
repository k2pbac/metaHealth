//REDUCER -  how our actions transform state from one state to next state - based on action modify store
import { authConstants } from "constants/auth.constants";

const authReducer = (state = false, action) => {
  switch (action.type) {
    case authConstants.EMPLOYEE_LOGIN_REQUEST:
      return action.user;
    case authConstants.PATIENT_LOGIN_REQUEST:
      return action.user;
    default:
      return state;
  }
};

export default authReducer;
