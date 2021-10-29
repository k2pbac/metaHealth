const loggedReducer = (state = false, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("isLogged", true);
      return true;
    case "LOGOUT":
      localStorage.removeItem("isLogged");
      return false;
    default:
      return false;
  }
};

export default loggedReducer;
