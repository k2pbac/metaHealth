import axios from "axios";

const authenticatePatient = (username, password) => {
  console.log(username, password);
  return axios({
    method: "POST",
    data: {
      username,
      password,
    },
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
    url: "/api/patient/login",
  })
    .then((res) => {
      return { user: res.data.user, message: res.data.message };
    })
    .catch((err) => {
      console.log(err);
    });
};

const authenticateEmployee = (username, password) => {
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
      return { user: res.data.user, message: res.data.message };
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
    return axios
      .post(`/api/employee/register`, { newUser })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
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
    })
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log(err));
  }
};

const submitClinicRegistration = (user) => {
  if (user) {
    const newUser = {
      name: user["Name"].value,
      address: user["Address"].value,
      website: user["Website"].value,
      phone_number: user["Phone Number"].value,
      avatar: "http://dummyimage.com/321x848.png/cc0000/ffffff",
      clinic_owner_id: JSON.parse(localStorage.getItem("user")).user.id,
      ein_number: user["EIN/TIN Number"].value,
      insurance_number: user["Insurance Number"].value,
      tax_id_number: user["Tax ID Number"].value,
    };
    return axios({
      method: "POST",
      data: {
        newUser,
      },
      withCredentials: true,
      url: "/api/clinic/register ",
    })
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log(err));
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

const verifyEmployee = (employee_id, clinic_id) => {
  return axios({
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

const unverifyEmployee = (employee_id, clinic_id) => {
  return axios({
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

const getClinicData = (clinic_id) => {
  return axios({
    method: "POST",
    data: {
      clinic_id,
    },
    withCredentials: true,
    url: "/api/clinics/data",
  }).then((result) => {
    return result.data;
  });
};

export const userServices = {
  authenticateEmployee,
  authenticatePatient,
  submitPatientRegistration,
  submitEmployeeRegistration,
  submitClinicRegistration,
  submitEmployeeRegistrationForClinic,
  getPatientRecordsForClinic,
  getEmployeesForClinic,
  verifyEmployee,
  unverifyEmployee,
  getClinicData,
};
