module.exports.patientFormData = {
  type: "Patients",
  fields: {
    "Account Info": [
      { value: "Username", type: "text" },
      { value: "Password", type: "password" },
    ],
    "Personal Info": [
      { value: "First Name", type: "text" },
      { value: "Last Name", type: "text" },
      { value: "Date of birth", type: "date" },
      { value: "Gender", type: "text" },
      { value: "Description", type: "text" },
      { value: "Address", type: "text" },
      { value: "Phone Number", type: "tel" },
      { value: "Email Address", type: "email" },
    ],
    "Insurance Info": [
      { value: "Plan Name", type: "text" },
      { value: "Member ID", type: "text" },
      { value: "Policy Number", type: "text" },
    ],
  },
};

module.exports.employeeFormData = {
  type: "Employee",
  fields: {
    "Account Info": [
      { value: "Username", type: "text" },
      { value: "Password", type: "password" },
    ],
    "Personal Info": [
      { value: "First Name", type: "text" },
      { value: "Last Name", type: "text" },
      { value: "Phone Number", type: "tel" },
      { value: "Email Address", type: "email" },
      { value: "Gender", type: "radio", options: ["Male", "Female"] },
      { value: "Are you a doctor?", type: "radio", options: ["Yes", "No"] },
    ],
  },
};

module.exports.clinicFormData = {
  type: "Clinic",
  fields: {
    "Clinic Details": [
      { value: "Name", type: "text" },
      { value: "Address", type: "text" },
    ],
    "Additional Information": [
      { value: "EIN/TIN Number", type: "text" },
      { value: "Insurance Number", type: "text" },
      { value: "Tax ID Number", type: "text" },
      {
        value: "Policies, procedures and compliance documentation",
        type: "file",
      },
    ],
  },
};
