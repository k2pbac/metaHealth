//REDUCER -  how our actions transform state from one state to next state - based on action modify store
import { authConstants } from "constants/auth.constants";

let user = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

const initialState = user ? { loggedIn: true, ...user } : { loggedIn: false };
const userLoggedReducer = (state = initialState, action) => {
  switch (action.type) {
    case authConstants.USER_LOGIN_SUCCESS:
      localStorage.setItem("user", JSON.stringify(action.user));
      return { ...action.user, loggedIn: true };
    case authConstants.UPDATE_PROFILE:
      localStorage.setItem(
        "user",
        JSON.stringify({
          ...JSON.parse(localStorage.getItem("user")),
          ...action.user,
        })
      );
      return {
        ...JSON.parse(localStorage.getItem("user")),
        ...action.user,
        loggedIn: true,
        update_profile: true,
      };
    case authConstants.LOGOUT:
      localStorage.removeItem("user");
      return { loggedIn: false };
    default:
      return state;
  }
};

export default userLoggedReducer;
