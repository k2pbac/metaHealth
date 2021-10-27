module.exports.schedule = {
  doctors: [
    {
      id: 1,
      name: "Dr. Henry",
      appointments: [
        {
          time: 9,
          patient_id: 1,
        },
        {
          time: 3,
          patient_id: 2,
        },
      ],
    },
    {
      id: 2,
      name: "Dr. Michelle",
      appointments: [
        {
          time: 2,
          patient_id: 3,
        },
      ],
    },
    {
      id: 3,
      name: "Dr. Seuss",
      appointments: [
        {
          time: 10,
          patient_id: 4,
        },
      ],
    },
  ],
  patients: [
    {
      id: 1,
      name: "Jerry Cres",
    },
    {
      id: 2,
      name: "Jimmy neutron",
    },
    {
      id: 3,
      name: "Michael Scott",
    },
    {
      id: 4,
      name: "Sean McGoose",
    },
  ],
};
