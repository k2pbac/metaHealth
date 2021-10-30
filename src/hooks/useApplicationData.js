import React, { useState, useEffect } from "react";

import axios from "axios";

const useApplicationData = () => {
  const [appState, setAppState] = useState({});
  const [patients, setPatients] = useState({});
  const [patientName, setPatientName] = useState("");

  const [clinics, setClinics] = useState({});
  const [clinicName, setClinicName] = useState("");

  useEffect(() => {
    Promise.all([
      axios.get("/api/clinics"),
      axios.get("/api/patients"),
      axios.get("/api/employees"),
    ]).then((all) => {
      const [first, second, third] = all;
      setAppState({
        clinics: first.data,
        patients: second.data,
        employee: third.data,
      });
    });
  }, []);

  useEffect(() => {
    if (patientName !== "") {
      axios.get(`/api/registered-patients/${patientName}`).then((res) => {
        setPatients(res.data);
      });
    }
  }, [patientName]);

  useEffect(() => {
    // if (clinicName !== "") {
    //   axios.get(`/api/clinics/${clinicName}`).then((res) => {
    //     setClinics(res.data);
    //   });
    // }
  }, [clinicName]);

  const submitEmployeeRegistration = (user) => {
    if (user) {
      const newUser = {
        first_name: user["First Name"].value,
        last_name: user["Last Name"].value,
        username: user["Username"].value,
        password: user["Password"].value,
        gender: "Male",
        phone_number: user["Phone Number"].value,
        email_address: user["Email Address"].value,
        is_doctor:
          user["Are you a doctor?"][Object.keys(user["Are you a doctor?"])[0]],
      };
      return axios.put(`/api/employee/register`, { newUser }).then(() => {
        setAppState((prev) => {
          return {
            ...prev,
            employee: {
              ...prev.employee,
              newUser,
            },
          };
        });
      });
    }
  };

  return {
    appState,
    patients,
    patientName,
    setPatientName,
    clinics,
    setClinics,
    clinicName,
    setClinicName,
    submitEmployeeRegistration,
  };
};

export default useApplicationData;
