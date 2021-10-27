module.exports.patientFormData = {
  type: "Patients",
  fields: {
    "Account Info": [
      { value: "Username", type: "text" },
      { value: "Password", type: "password" },
    ],
    "Personal Info": [
      { value: "Name", type: "text" },
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
      { value: "Name", type: "text" },
      { value: "Phone Number", type: "tel" },
      { value: "Email Address", type: "email" },
      { value: "Are you a doctor?", type: "checkbox" },
    ],
  },
};
