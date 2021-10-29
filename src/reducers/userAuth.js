//REDUCER -  how our actions transform state from one state to next state - based on action modify store

const authReducer = (state = null, action) => {
  switch (action.type) {
    case "LOGIN":
      return action.user;
    case "LOGOUT":
      return null;
    default:
      return null;
  }
};

export default authReducer;
