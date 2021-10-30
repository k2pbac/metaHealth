//REDUCER -  how our actions transform state from one state to next state - based on action modify store

const registerReducer = (state = null, action) => {
  switch (action.type) {
    case "REGISTER":
      return action.user;
    default:
      return null;
  }
};

export default registerReducer;
