import React from "react";
import Table from "react-bootstrap/Table";
import "./Schedule.scss";

const Schedule = ({ booked }) => {
  return (
    <Table className="table" hover>
      <thead>
        <tr>
          <th></th>
          <th>Dr. Henry</th>
          <th>Dr. Michelle</th>
          <th>Dr. Seuss</th>
        </tr>
      </thead>
      <tbody>
        {[9, 10, 11, 12, 1, 2, 3, 4, 5].map((timeslot) => (
          <tr>
            <td className="timeslots">
              {timeslot < 12 && timeslot >= 9
                ? timeslot + ":00 AM"
                : timeslot + ":00 PM"}
            </td>
            <td className={`${booked && "dayBooked"}`}>Jacob</td>
            <td>Jimmy</td>
            <td>Jerry</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Schedule;
