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

  const bookAppointment = (appointment) => {
    if (appointment && Object.keys(appointment).length) {
      let newDate = new Date(appointment.date).toLocaleDateString();
      newDate +=
        appointment.time < 10
          ? ` 0${appointment.time}:00:00`
          : ` ${appointment.time}:00:00`;
      console.log(newDate);
      axios
        .post("/api/patient/book", { ...appointment })
        .then((result) => {
          setAppState((prev) => {
            return {
              ...prev,
              appointments: {
                ...prev.appointments,
                ...{ ...appointment, date: newDate },
              },
            };
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const deleteAppointment = (appointment_id) => {
    if (appointment_id) {
      axios
        .delete(`/api/appointment/${appointment_id}`)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    Promise.all([
      axios.get("/api/clinics"),
      axios.get("/api/patients"),
      axios.get("/api/employees"),
      axios.get("/api/registered"),
      axios.get("/api/appointments"),
      axios.get("/api/patient/records"),
    ]).then((all) => {
      const [first, second, third, fourth, fifth, sixth] = all;
      setAppState({
        clinics: first.data,
        patients: second.data,
        employee: third.data,
        registered: fourth.data,
        appointments: fifth.data,
        clinicRecords: sixth.data,
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
    setAppState,
    patients,
    // patientName,
    // setPatientName,
    clinics,
    setClinics,
    clinicName,
    setClinicName,
    updatePatientProfile,
    bookAppointment,
    deleteAppointment,
  };
};

export default useApplicationData;
