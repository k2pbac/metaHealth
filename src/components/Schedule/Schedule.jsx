import React from "react";
import Table from "react-bootstrap/Table";
import "./Schedule.scss";

const Schedule = ({ appointmentData }) => {
  return (
    <Table className="schedule table scrollable-table">
      <thead>
        <tr>
          <th></th>
          {(Object.keys(appointmentData).length &&
            Object.keys(appointmentData.doctors).map((doctor) => (
              <th key={appointmentData.doctors[doctor].id}>
                {appointmentData.doctors[doctor].first_name +
                  " " +
                  appointmentData.doctors[doctor].last_name}
              </th>
            ))) || <th></th>}
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
              {(Object.keys(appointmentData).length &&
                Object.keys(appointmentData.doctors).map((doctor, index2) => {
                  return appointmentData.appointments.map(
                    (appointment, index3) => {
                      console.log(appointment);
                      if (
                        appointmentData.doctors[appointment.employee_account_id]
                          .first_name ===
                          appointmentData.doctors[doctor].first_name &&
                        appointment.time === timeslot &&
                        count < 3
                      ) {
                        count++;
                        return (
                          <td
                            className={`${
                              ((appointmentData.isEmployee ||
                                appointmentData.patient ===
                                  appointmentData.patients[
                                    appointment.patient_account_id
                                  ].name) &&
                                "booked") ||
                              "bg-secondary"
                            }`}
                            key={appointment.id}
                          >
                            {(appointmentData.isEmployee ||
                              appointmentData.patient ===
                                appointmentData.patients[
                                  appointment.patient_account_id
                                ].name) &&
                              appointmentData.patients[
                                appointment.patient_account_id
                              ].name}
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
                })) || <td></td>}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default Schedule;
