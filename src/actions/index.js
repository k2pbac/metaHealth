//Action - action for our state  (login user, logout user)
export const loginUser = (username, password) => {
  return {
    type: "LOGIN",
    user: { username, password },
  };
};

export const logoutUser = (user) => {
  return {
    type: "LOGOUT",
    user: null,
  };
};
