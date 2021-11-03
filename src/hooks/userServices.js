import axios from "axios";

const authenticatePatient = ({ username, password }) => {
  return axios({
    method: "POST",
    data: {
      username,
      password,
    },
    withCredentials: true,
    url: "/api/patient/login",
  })
    .then((res) => {
      return { user: res.data.user };
    })
    .catch((err) => {
      console.log(err);
    });
};

const authenticateEmployee = ({ username, password }) => {
  return axios({
    method: "POST",
    data: {
      username,
      password,
    },
    withCredentials: true,
    url: "/api/employee/login",
  })
    .then((res) => {
      return { user: res.data.user };
    })
    .catch((err) => console.log(err));
};

const submitEmployeeRegistration = (user) => {
  if (user) {
    const newUser = {
      first_name: user["First Name"].value,
      last_name: user["Last Name"].value,
      username: user["Username"].value,
      password: user["Password"].value,
      gender: Object.keys(user["Gender"])[0],
      phone_number: user["Phone Number"].value,
      email_address: user["Email Address"].value,
      avatar: "https://i.imgur.com/UIp27UN.png",
      is_doctor:
        user["Are you a doctor?"][Object.keys(user["Are you a doctor?"])[0]],
    };
    return axios.post(`/api/employee/register`, { newUser });
  }
};

const submitPatientRegistration = (user) => {
  if (user) {
    const newUser = {
      first_name: user["First Name"].value,
      last_name: user["Last Name"].value,
      username: user["Username"].value,
      password: user["Password"].value,
      date_of_birth: user["Date of birth"].value,
      gender: Object.keys(user["Gender"])[0],
      profile_description: user["Description"].value,
      phone_number: user["Phone Number"].value,
      email_address: user["Email Address"].value,
      address: user["Address"].value,
      avatar: "https://i.imgur.com/UIp27UN.png",
      health_card_number: user["Health Card Number"].value,
      insurance_member_id: user["Member ID"].value,
      insurance_policy_number: user["Policy Number"].value,
      insurance_plan_name: user["Plan Name"].value,
    };
    return axios({
      method: "POST",
      data: {
        newUser,
      },
      withCredentials: true,
      url: "/api/patient/register ",
    });
  }
};

const submitEmployeeRegistrationForClinic = (employee, clinic_id) => {
  return axios({
    method: "PUT",
    data: {
      employee,
      clinic_id,
    },
    withCredentials: true,
    url: "/api/clinics/register/existing",
  });
};

const getPatientRecordsForClinic = (patient_name, clinic_id) => {
  return axios({
    method: "POST",
    data: {
      patient_name,
      clinic_id,
    },
    withCredentials: true,
    url: "/api/clinics/patient/records",
  }).then((result) => {
    console.log("result:", result.data);
    return result.data;
  });
};

const getEmployeesForClinic = async (clinic_id) => {
  return await axios({
    method: "POST",
    data: {
      clinic_id,
    },
    withCredentials: true,
    url: "/api/clinics/employee/list",
  }).then((result) => {
    return result.data;
  });
};

const verifyEmployee = (employee_id,clinic_id) => {
  return  axios({
    method: "PUT",
    data: {
      employee_id,
      clinic_id,
    },
    withCredentials: true,
    url: "/api/clinics/employee/verify",
  }).then((result) => {
    return result.data;
  });
};

const unverifyEmployee = (employee_id,clinic_id) => {
  return  axios({
    method: "PUT",
    data: {
      employee_id,
      clinic_id,
    },
    withCredentials: true,
    url: "/api/clinics/employee/unverify",
  }).then((result) => {
    return result.data;
  });
};

export const userServices = {
  authenticateEmployee,
  authenticatePatient,
  submitPatientRegistration,
  submitEmployeeRegistration,
  submitEmployeeRegistrationForClinic,
  getPatientRecordsForClinic,
  getEmployeesForClinic,
  verifyEmployee,
  unverifyEmployee
};
