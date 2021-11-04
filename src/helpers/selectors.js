// ***************************Display Clinics for Book Appointments Component*****************************
//********************************************************************************************************

import { patient } from "components/PatientSchedule/patient_appointment";

export const displayClinics = ({ clinics = {} }, clinicName) => {
  let results = {};
  const regex = new RegExp("^" + clinicName + ".*", "i");
  if (clinicName) {
    for (let clinic in clinics) {
      if (clinics[clinic].name.match(regex) && clinicName) {
        results[clinic] = {
          id: clinics[clinic].id,
          name: clinics[clinic].name,
          address: clinics[clinic].address,
          avatar: clinics[clinic].avatar,
        };
      }
    }
  }
  return results;
};

// ***************************************Display Patient Profile Page************************************
//********************************************************************************************************

export const viewPatientProfile = ({ patients = [] }, patient_id) => {
  if (patients) {
    for (let patientIndex of patients) {
      if (patientIndex["id"] === patient_id) {
        return patientIndex;
      }
    }
  }
  return null;
};

// *************************************Display Clinics Appointments**************************************
//********************************************************************************************************

export const displayClinicAddress = ({ clinics }, clinic_id) => {
  for (let clinic in clinics) {
    if (clinics[clinic].id === parseInt(clinic_id)) {
      return clinics[clinic];
    }
  }
  return {};
};

export const displayClinicAppointments = (
  { employee, patients, appointments },
  date,
  clinic_id
) => {
  let sorted_patients = {};
  let sorted_appointments = [];
  let sorted_doctors = {};

  for (let appointment in appointments) {
    if (
      appointments[appointment].clinic_id === clinic_id &&
      !sorted_doctors[appointments[appointment].employee_account_id - 1]
    ) {
      // if (
      //   employee[appointments[appointment].employee_account_id - 1]
      //     .clinic_id === clinic_id
      // ) {
      sorted_doctors[appointments[appointment].employee_account_id] =
        employee[appointments[appointment].employee_account_id - 1];
      if (
        appointments[appointment].date === date &&
        clinic_id === appointments[appointment].clinic_id
      ) {
        sorted_appointments.push(appointments[appointment]);
      }
      // }
    }
  }

  console.log(sorted_doctors);

  for (let appointment of sorted_appointments) {
    sorted_patients[appointment.patient_account_id] =
      patients[appointment.patient_account_id - 1];
  }
  return {
    appointments: [...sorted_appointments],
    doctors: { ...sorted_doctors },
    patients: { ...sorted_patients },
  };
};

export const getClinicRecords = (
  { clinicRecords, appointments },
  date,
  patient_id,
  clinic_id
) => {
  const records = {};
  let sorted_appointments = [];

  for (let appointment in appointments) {
    if (
      clinic_id === appointments[appointment].clinic_id &&
      appointments[appointment].patient_account_id === patient_id
    ) {
      sorted_appointments.push(appointments[appointment]);
    }
  }

  for (let record in clinicRecords) {
    if (clinicRecords[record].patient_id === patient_id) {
      records[record] = clinicRecords[record];
    }
  }

  console.log(records);
  return records;
};

export const getPatientMedicalRecords = (
  { clinics, patients, registered, medicalRecords },
  patient_id
) => {
  const reports = [];
  let foundPatient = {};
  let clinic = {};
  patient_id = parseInt(patient_id);
  for (let patient in patients) {
    if (patient_id === patients[patient].id) {
      foundPatient[patient_id] = patients[patient];
      break;
    }
  }

  console.log(foundPatient);
  for (let register in registered) {
    if (
      foundPatient[patient_id].id === registered[register].patient_account_id
    ) {
      clinic[registered[register].clinic_id + 1] =
        clinics[registered[register].clinic_id];
      break;
    }
  }

  for (let record in medicalRecords) {
    if (medicalRecords[record].patient_id === patient_id) {
      reports.push(medicalRecords[record]);
    }
  }
  const { name, address } = clinic[Object.keys(clinic)[0]];
  const {
    first_name,
    last_name,
    address: newAddress,
    email_address,
    phone_number,
  } = foundPatient[patient_id];
  console.log(reports);
  return {
    clinic: name,
    address: address,
    reports: reports,
    patient: {
      name: first_name + " " + last_name,
      newAddress,
      email: email_address,
      phone: phone_number,
      id: patient_id,
    },
  };
};

export const getPatientAppointments = (
  { appointments, patients, clinics, employee },
  patient_id
) => {
  let appointmentData = {};
  let clinicId = [];
  let foundClinic = [];
  let foundPatient = {};
  let foundDoctor = {};

  console.log(employee);
  for (let appointment in appointments) {
    if (patient_id === appointments[appointment].patient_account_id) {
      clinicId.push(appointments[appointment].clinic_id);

      if (appointmentData.hasOwnProperty(appointments[appointment].clinic_id)) {
        appointmentData[appointments[appointment].clinic_id].push({
          ...appointments[appointment],
          doctor: employee[appointments[appointment].employee_account_id],
        });
      } else {
        appointmentData[appointments[appointment].clinic_id] = [
          {
            ...appointments[appointment],
            doctor: employee[appointments[appointment].employee_account_id],
          },
        ];
      }
    }
  }

  console.log("Temp clinics:", appointmentData);

  let sorted = Object.values(appointmentData).sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  sorted = sorted.sort((a, b) => parseInt(a.time) - parseInt(b.time));

  for (let clinic in clinics) {
    if (clinicId.includes(clinics[clinic].id)) {
      foundClinic.push(clinics[clinic]);
    }
  }

  for (let patient in patients) {
    if (patients[patient].id === patient_id) {
      foundPatient[patient_id] = patients[patient];
    }
  }

  return {
    appointments: sorted,
    patient: foundPatient,
    clinics: foundClinic,
    doctor: foundDoctor,
  };
};
