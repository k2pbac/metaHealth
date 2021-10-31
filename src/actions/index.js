import { authConstants } from "constants/auth.constants";
//user actions to register and authenticate a user when a login request is made
export const authenticatePatient = (username, password, isEmployee) => {
  return {
    type: authConstants.PATIENT_LOGIN_REQUEST,
    user: { username, password, isEmployee },
  };
};

export const authenticateEmployee = (username, password, isEmployee) => {
  return {
    type: authConstants.EMPLOYEE_LOGIN_REQUEST,
    user: { username, password, isEmployee },
  };
};

export const registerEmployee = (user) => {
  return {
    type: authConstants.EMPLOYEE_REGISTER_REQUEST,
    user: user,
  };
};

export const registerPatient = (user) => {
  return {
    type: authConstants.PATIENT_REGISTER_REQUEST,
    user: user,
  };
};

// Login and logout after authentication (for login)
export const loginUser = (user) => {
  return {
    type: authConstants.USER_LOGIN_SUCCESS,
    user: { ...user },
  };
};

export const logoutUser = (user) => {
  return {
    type: authConstants.LOGOUT,
    user: null,
  };
};

// Dont need

export const getTableData = (applicationData) => {
  return {
    type: "DATA",
    payload: applicationData,
  };
};

export const updateProfile = (user) => {
  return {
    type: authConstants.UPDATE_PROFILE,
    user: { user },
  };
};
