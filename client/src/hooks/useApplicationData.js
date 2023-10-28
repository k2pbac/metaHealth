import React, { useState, useEffect } from "react";
import axios from "axios";

const useApplicationData = () => {
  const [appState, setAppState] = useState({});
  const [patients, setPatients] = useState({});
  const [patientName, setPatientName] = useState("");
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

  const updateEmployeeProfile = (employee) => {
    if (Object.keys(employee).length) {
      axios.put("/api/employee/profile", { ...employee }).then((result) => {
        setAppState((prev) => {
          return {
            ...prev,
            employee: {
              ...prev.employee,
              employee,
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
          console.log("Deleted appointment");
        })
        .catch((err) => console.log(err));
    }
  };

  const updatePatientNotes = (patientUpdates) => {
    if (patientUpdates) {
      axios.put("/api/patient/records", patientUpdates).then((res) => {
        console.log("Updated notes");
      });
    }
  };

  const editPatientRecord = (reportData, patient_id, user) => {
    if (reportData) {
      axios
        .put("/api/patient/report", {
          ...reportData,
          patient_id,
          user,
        })
        .then((res) => {
          console.log("Updated patient record");
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
      axios.get("/api/patient/medical-records"),
    ])
      .then((all) => {
        const [first, second, third, fourth, fifth, sixth, seven] = all;
        setAppState({
          clinics: first.data,
          patients: second.data,
          employee: third.data,
          registered: fourth.data,
          appointments: fifth.data,
          clinicRecords: sixth.data,
          medicalRecords: seven.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return {
    appState,
    setAppState,
    patients,
    clinics,
    setClinics,
    clinicName,
    setClinicName,
    updatePatientProfile,
    bookAppointment,
    deleteAppointment,
    updatePatientNotes,
    editPatientRecord,
    updateEmployeeProfile,
    setPatientName,
  };
};

export default useApplicationData;
