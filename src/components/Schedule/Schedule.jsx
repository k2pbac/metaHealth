import React from "react";
import Table from "react-bootstrap/Table";
import "./Schedule.scss";

const Schedule = ({ appointmentData }) => {
  return (
    <div className="scrollable-table">
      <Table className="table fixed_header" hover>
        <thead>
          <tr>
            <th></th>
            {appointmentData.doctors.map((doctor) => (
              <>
                <th>{doctor.name}</th>
              </>
            ))}
          </tr>
        </thead>
        <tbody>
          {[9, 10, 11, 12, 1, 2, 3, 4, 5].map((timeslot) => (
            <tr>
              <td>{timeslot}</td>
              <td>row 1-0</td>
              <td>row 1-1</td>
              <td>row 1-2</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Schedule;
