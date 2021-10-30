//REDUCER -  how our actions transform state from one state to next state - based on action modify store

const authReducer = (state = null, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("user", action.user.username);
      return action.user;
    case "LOGOUT":
      localStorage.removeItem("user");
      return null;
    case "REGISTER":
      return action.user;
    default:
      return null;
  }
};

export default authReducer;
