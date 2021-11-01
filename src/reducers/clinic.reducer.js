const clinic = localStorage.getItem("clinic_id")
  ? localStorage.getItem("clinic_id")
  : null;

export const clinicReducer = (state = clinic, action) => {
  switch (action) {
    case "GET_CLINIC":
      localStorage.setItem("clinic_id", action.clinic_id);
      return action.clinic_id;
    default:
      return state;
  }
};
