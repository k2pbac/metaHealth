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

export const displayClinicAppointments = ({
  employee,
  patients,
  appointments,
}) => {
  // let  = {};

  return null;
};
//appointments table for appointments
//patient_account table
// -- will need the logged in user
// -- will need a list of patients who have appointments on that day
//employee_accounts table
// -- will need a list of doctors who were the doctor for that appointment
