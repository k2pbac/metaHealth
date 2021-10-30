export const displayClinics = ({ clinics = {} }, clinicName) => {
  let results = {};
  // clinic, name, address, avatar
  // let regex = /clinicName.*/i;

  const regex = new RegExp("^" + clinicName + ".*", "i"); // correct way
  // const newstr = str.replace(regex,''); // it works

  if (clinicName) {
    for (let clinic in clinics) {
      if (clinics[clinic].name.match(regex) && clinicName) {
        console.log(regex);
        console.log(clinics[clinic].name.match(regex));
        results[clinic] = {
          id: clinics[clinic].id,
          name: clinics[clinic].name,
          address: clinics[clinic].address,
          avatar: clinics[clinic].avatar,
        };
      }
    }
  }
  console.log(results);
  return results;
};

export const viewPatientMedicalRecords = (patient, clinic) => {
  //first name,
};

// SELECT *, registered.clinic_id FROM patient_accounts
//         JOIN registered on patient_accounts.id = registered.patient_account_id
//         WHERE (first_name ILIKE '${clinic_name}%')
//         OR (last_name ILIKE '${clinic_name}%')
//         ORDER BY last_name;
