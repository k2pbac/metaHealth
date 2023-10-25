module.exports.patientSchedule = {
  clinic: "Toronto Public Clinic",
  address: "123 Yonge St. Toronto, ON M3B 2T1",
  isEmployee: false,
  patient: "Jerry Cres",
  appointments: [
    {
      id: 1,
      time: 9,
      patient_id: 1,
      doctor_id: 1,
    },
    {
      id: 2,
      time: 3,
      patient_id: 2,
      doctor_id: 1,
    },
    {
      id: 3,
      time: 2,
      patient_id: 3,
      doctor_id: 2,
    },
    {
      id: 4,
      time: 10,
      patient_id: 4,
      doctor_id: 3,
    },
  ],
  patients: {
    1: {
      id: 1,
      name: "Jerry Cres",
    },
    2: {
      id: 2,
      name: "Jimmy neutron",
    },
    3: {
      id: 3,
      name: "Michael Scott",
    },
    4: {
      id: 4,
      name: "Sean McGoose",
    },
  },
  doctors: {
    1: {
      id: 1,
      name: "Dr. Henry",
    },
    2: {
      id: 2,
      name: "Dr. Michelle",
    },
    3: {
      id: 3,
      name: "Dr. Seuss",
    },
  },
};

module.exports.employeeSchedule = {
  clinic: "Toronto Public Clinic",
  address: "123 Yonge St. Toronto, ON M3B 2T1",
  isEmployee: true,
  appointments: [
    {
      id: 1,
      time: 9,
      patient_id: 1,
      doctor_id: 1,
    },
    {
      id: 2,
      time: 3,
      patient_id: 2,
      doctor_id: 1,
    },
    {
      id: 3,
      time: 2,
      patient_id: 3,
      doctor_id: 2,
    },
    {
      id: 4,
      time: 10,
      patient_id: 4,
      doctor_id: 3,
    },
  ],
  patients: {
    1: {
      id: 1,
      name: "Jerry Cres",
    },
    2: {
      id: 2,
      name: "Jimmy neutron",
    },
    3: {
      id: 3,
      name: "Michael Scott",
    },
    4: {
      id: 4,
      name: "Sean McGoose",
    },
  },
  doctors: {
    1: {
      id: 1,
      name: "Dr. Henry",
    },
    2: {
      id: 2,
      name: "Dr. Michelle",
    },
    3: {
      id: 3,
      name: "Dr. Seuss",
    },
  },
};
