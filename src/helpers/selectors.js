export const displayClinics = ({ clinics = {} }, clinicName) => {
  let results = {};
  // clinic, name, address, avatar
  // let regex = /clinicName.*/i;

  const regex = new RegExp("^" + clinicName + ".*", "i"); // correct way
  // const newstr = str.replace(regex,''); // it works

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

export const viewPatientProfile = (patientList, patient_id) => {
  let results = {};

  if (patientList) {
    for (let patient in patientList) {
      if (patientList[patient].id === patient_id) {
        return patient;
      }
    }
  }
};

// SELECT *, registered.clinic_id FROM patient_accounts
//         JOIN registered on patient_accounts.id = registered.patient_account_id
//         WHERE (first_name ILIKE '${clinic_name}%')
//         OR (last_name ILIKE '${clinic_name}%')
//         ORDER BY last_name;
