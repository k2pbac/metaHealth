import React from "react";
import Table from "react-bootstrap/Table";
import "./Schedule.scss";

const Schedule = ({ appointmentData }) => {
  return (
    <Table className="table scrollable-table">
      <thead>
        <tr>
          <th></th>
          {appointmentData.appointments.map((doctor) => (
            <th key={doctor.id}>{doctor.name}</th>
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
            {appointmentData.appointments.map((doctor, index) => (
              <td>{timeslot === doctor}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Schedule;
