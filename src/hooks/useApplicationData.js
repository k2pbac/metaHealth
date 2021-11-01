import React, { useState, useEffect } from "react";
import axios from "axios";

const useApplicationData = () => {
  const [appState, setAppState] = useState({});
  const [patients, setPatients] = useState({});
  // const [patient, setPatientName] = useState("");
  const [clinics, setClinics] = useState({});
  const [clinicName, setClinicName] = useState("");

  const updatePatientProfile = (patient) => {
    if (Object.keys(patient).length) {
      axios.put("/api/patient/profile", { ...patient }).then((result) => {
        setAppState((prev) => {
          return {
            ...prev,
            patients: {
              ...prev.patients,
              patient,
            },
          };
        });
      });
    }
  };

  useEffect(() => {
    Promise.all([
      axios.get("/api/clinics"),
      axios.get("/api/patients"),
      axios.get("/api/employees"),
      axios.get("/api/registered"),
      axios.get("/api/appointments"),
    ]).then((all) => {
      const [first, second, third, fourth, fifth, sixth] = all;
      setAppState({
        clinics: first.data,
        patients: second.data,
        employee: third.data,
        registered: fourth.data,
        appointments: fifth.data,
      });
    });
  }, []);

  // useEffect(() => {
  //   if (patientName !== "") {
  //     axios.get(`/api/registered-patients/${patientName}`).then((res) => {
  //       setPatients(res.data);
  //     });
  //   }
  // }, [patientName]);

  // useEffect(() => {
  //   if (clinicName !== "") {
  //     axios.get(`/api/clinics/${clinicName}`).then((res) => {
  //       setClinics(res.data);
  //     });
  //   }
  // }, [clinicName]);

  return {
    appState,
    patients,
    // patientName,
    // setPatientName,
    clinics,
    setClinics,
    clinicName,
    setClinicName,
    updatePatientProfile,
  };
};

export default useApplicationData;
