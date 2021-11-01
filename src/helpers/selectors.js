// ***************************Display Clinics for Book Appointments Component*****************************
//********************************************************************************************************

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
      !sorted_doctors[appointments[appointment].employee_account_id]
    ) {
      sorted_doctors[appointments[appointment].employee_account_id] =
        employee[appointments[appointment].employee_account_id - 1];
    }

    if (
      appointments[appointment].date === date &&
      clinic_id === appointments[appointment].clinic_id
    ) {
      sorted_appointments.push(appointments[appointment]);
    }
  }

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
//appointments table for appointments
//patient_account table
// -- will need the logged in user
// -- will need a list of patients who have appointments on that day
//employee_accounts table
// -- will need a list of doctors who were the doctor for that appointment

//date format 2021-02-28 23:14:18
