import React from "react";
import Table from "react-bootstrap/Table";
import "./Schedule.scss";

const Schedule = ({ appointmentData }) => {
  return (
    <Table className="schedule table scrollable-table">
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
        {[9, 10, 11, 12, 1, 2, 3, 4, 5].map((timeslot, index) => {
          let count = 0;
          return (
            <tr key={index}>
              <td>
                {timeslot < 12 && timeslot >= 9
                  ? timeslot + ":00 AM"
                  : timeslot + ":00 PM"}
              </td>
              {Object.keys(appointmentData.doctors).map((doctor, index2) => {
                return appointmentData.appointments.map(
                  (appointment, index3) => {
                    if (
                      appointmentData.doctors[appointment.doctor_id].name ===
                        appointmentData.doctors[doctor].name &&
                      appointment.time === timeslot &&
                      count < 3
                    ) {
                      count++;
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
                            appointmentData.patients[appointment.patient_id]
                              .name}
                        </td>
                      );
                    } else if (
                      count < 3 &&
                      index3 >= appointmentData.appointments.length - 1
                    ) {
                      count++;
                      return <td key={Math.random(434235142)}></td>;
                    }
                  }
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default Schedule;
