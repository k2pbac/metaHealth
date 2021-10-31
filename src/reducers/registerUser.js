//REDUCER -  how our actions transform state from one state to next state - based on action modify store
import { authConstants } from "constants/auth.constants";
const registerReducer = (state = null, action) => {
  switch (action.type) {
    case authConstants.EMPLOYEE_REGISTER_REQUEST:
      return action.user;
    case authConstants.PATIENT_REGISTER_REQUEST:
      return action.user;
    default:
      return null;
  }
};

export default registerReducer;
