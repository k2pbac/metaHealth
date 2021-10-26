module.exports.formData = {
  type: "Patients",
  fields: {
    "Account Info": [
      { value: "Username", type: "text" },
      { value: "Password", type: "password" },
    ],
    "Personal Info": [
      { value: "Date of birth", type: "date" },
      { value: "Gender", type: "text" },
      { value: "Description", type: "text" },
      { value: "Address", type: "text" },
    ],
    "Insurance Info": [
      { value: "Plan Name", type: "text" },
      { value: "Member ID", type: "text" },
      { value: "Policy Number", type: "text" },
    ],
  },
};
