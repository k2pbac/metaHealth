import React from "react";
import Table from "react-bootstrap/Table";
import "./Schedule.scss";

const Schedule = ({ appointmentData }) => {
  return (
    <Table className="table scrollable-table">
      <thead>
        <tr>
          <th></th>
          {Object.keys(appointmentData.doctors).map((doctor) => (
            <th key={appointmentData.doctors[doctor].id}>
              {appointmentData.doctors[doctor].name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {[9, 10, 11, 12, 1, 2, 3, 4, 5].map((timeslot, index) => (
          <tr key={index}>
            <td>
              {timeslot < 12 && timeslot >= 9
                ? timeslot + ":00 AM"
                : timeslot + ":00 PM"}
            </td>
            {appointmentData.appointments.map((appointment) => {
              if (timeslot === appointment.time) {
                return (
                  <td
                    className={`${
                      ((appointmentData.isEmployee ||
                        appointmentData.patient ===
                          appointmentData.patients[appointment.patient_id]
                            .name) &&
                        "booked") ||
                      "bg-secondary"
                    }`}
                    key={appointment.id}
                  >
                    {(appointmentData.isEmployee ||
                      appointmentData.patient ===
                        appointmentData.patients[appointment.patient_id]
                          .name) &&
                      appointmentData.patients[appointment.patient_id].name}
                  </td>
                );
              }
              return <td key={appointment.id}></td>;
            })}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Schedule;
