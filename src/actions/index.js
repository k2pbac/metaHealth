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

export const registerUser = (user) => {
  return {
    type: "REGISTER",
    user: { user },
  };
};

export const getTableData = (applicationData) => {
  return {
    type: "DATA",
    payload: applicationData,
  };
};
