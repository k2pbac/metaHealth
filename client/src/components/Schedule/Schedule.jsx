import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import "./Schedule.scss";
import Popover from "react-bootstrap/Popover";
import { OverlayTrigger, Button } from "react-bootstrap";
const Schedule = ({ appointmentData, bookAppointment, deleteAppointment }) => {
  return (
    <Table className="schedule table scrollable-table">
      <thead>
        <tr style={{ overflow: "auto" }}>
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
        {(appointmentData.appointments &&
          appointmentData.appointments.length &&
          [8, 9, 10, 11, 12, 1, 2, 3, 4, 5].map((timeslot, index) => {
            let count = 0;
            return (
              <tr key={index}>
                <td style={{ fontSize: "0.85rem" }}>
                  {timeslot < 12 && timeslot >= 8
                    ? timeslot + " AM"
                    : timeslot + " PM"}
                </td>
                {(Object.keys(appointmentData).length &&
                  Object.keys(appointmentData.doctors).map((doctor, index2) => {
                    const popover2 = (
                      <Popover
                        id="popover-basic"
                        style={{ zIndex: "9999!important" }}
                      >
                        <Popover.Header as="h3" className="fs-5">
                          Book Appointment
                        </Popover.Header>
                        <Popover.Body>
                          <p>Date: {appointmentData.date}</p>
                          <p>
                            Time:{" "}
                            {timeslot < 12 && timeslot >= 8
                              ? timeslot + ":00 AM"
                              : timeslot + ":00 PM"}
                          </p>
                          <p className="d-flex flex-column">
                            Doctor:{" "}
                            {appointmentData.doctors[doctor].first_name +
                              " " +
                              appointmentData.doctors[doctor].last_name}
                            <Button
                              onClick={() => {
                                bookAppointment({
                                  time: timeslot,
                                  date: appointmentData.bookingDate,
                                  clinic_id: appointmentData.clinic_id,
                                  patient_account_id: appointmentData.id,
                                  employee_account_id:
                                    appointmentData.doctors[doctor].id,
                                });
                                setTimeout(() => {
                                  window.location.reload(false);
                                }, 500);
                              }}
                              size="sm"
                              variant="success"
                            >
                              Book now
                            </Button>
                          </p>
                        </Popover.Body>
                      </Popover>
                    );
                    return appointmentData.appointments.map(
                      (appointment, index3) => {
                        appointment.time =
                          appointment.time > 12
                            ? appointment.time - 12
                            : appointment.time;
                        if (
                          appointmentData.doctors[
                            appointment.employee_account_id
                          ].first_name ===
                            appointmentData.doctors[doctor].first_name &&
                          appointment.time === timeslot &&
                          count < Object.keys(appointmentData.doctors).length
                        ) {
                          const popover = (
                            <Popover
                              id="popover-basic"
                              style={{ zIndex: "9999!important" }}
                            >
                              <Popover.Header as="h3" className="fs-5">
                                Appointment Details:
                              </Popover.Header>
                              <Popover.Body>
                                <div className="p-2">
                                  <p>
                                    Time:{" "}
                                    {timeslot < 12 && timeslot >= 8
                                      ? timeslot + ":00 AM"
                                      : timeslot + ":00 PM"}
                                  </p>
                                  <p>Date: {appointment.date}</p>
                                  <p className="d-flex flex-column">
                                    Doctor:
                                    {" " +
                                      appointmentData.doctors[doctor]
                                        .first_name +
                                      " " +
                                      appointmentData.doctors[doctor].last_name}
                                    <Button
                                      variant="danger"
                                      size="sm"
                                      onClick={() => {
                                        deleteAppointment(appointment.id);
                                        setTimeout(() => {
                                          window.location.reload(false);
                                        }, 500);
                                      }}
                                    >
                                      Delete Booking
                                    </Button>
                                  </p>
                                </div>
                              </Popover.Body>
                            </Popover>
                          );
                          count++;
                          const spot = (
                            <td
                              className={`${
                                ((JSON.parse(
                                  localStorage.getItem("isEmployee")
                                ) ||
                                  appointmentData.id ===
                                    appointmentData.appointments[index3]
                                      .patient_account_id) &&
                                  "booked") ||
                                "bg-secondary"
                              }`}
                              key={appointment.id}
                              style={{ cursor: "pointer" }}
                            >
                              <OverlayTrigger
                                trigger="click"
                                placement="bottom"
                                overlay={popover}
                                rootClose
                              >
                                <a>
                                  {(JSON.parse(
                                    localStorage.getItem("isEmployee")
                                  ) ||
                                    appointmentData.patient ===
                                      appointmentData.patients[
                                        appointment.patient_account_id
                                      ].first_name) &&
                                    appointmentData.patients[
                                      appointment.patient_account_id
                                    ].first_name +
                                      " " +
                                      appointmentData.patients[
                                        appointment.patient_account_id
                                      ].last_name}
                                </a>
                              </OverlayTrigger>
                            </td>
                          );
                          return spot;
                        } else if (
                          count < Object.keys(appointmentData.doctors).length &&
                          index3 >= appointmentData.appointments.length - 1
                        ) {
                          count++;
                          const spot = (!JSON.parse(
                            localStorage.getItem("isEmployee")
                          ) && (
                            <td key={Math.random(434235142)}>
                              <OverlayTrigger
                                trigger="click"
                                placement="bottom"
                                overlay={popover2}
                                rootClose
                              >
                                <a
                                  style={{
                                    cursor: "pointer",
                                    color: "transparent",
                                  }}
                                >
                                  CLICK ME
                                </a>
                              </OverlayTrigger>
                            </td>
                          )) || <td></td>;
                          return spot;
                        }
                      }
                    );
                  })) || <td></td>}
              </tr>
            );
          })) ||
          [8, 9, 10, 11, 12, 1, 2, 3, 4, 5].map((timeslot, index) => {
            return (
              <tr key={Math.random(123142)}>
                <td>
                  {timeslot < 12 && timeslot >= 8
                    ? timeslot + ":00 AM"
                    : timeslot + ":00 PM"}
                </td>
                {(Object.keys(appointmentData).length &&
                  Object.keys(appointmentData.doctors).map((doctor, index2) => {
                    const popover2 = (
                      <Popover
                        id="popover-basic"
                        style={{ zIndex: "9999!important" }}
                      >
                        <Popover.Header as="h3" className="fs-5">
                          Book Appointment
                        </Popover.Header>
                        <Popover.Body>
                          <p>Date: {appointmentData.date}</p>
                          <p>
                            Time:{" "}
                            {timeslot < 12 && timeslot >= 8
                              ? timeslot + ":00 AM"
                              : timeslot + ":00 PM"}
                          </p>
                          <p className="d-flex flex-column">
                            Doctor:{" "}
                            {appointmentData.doctors[doctor].first_name +
                              " " +
                              appointmentData.doctors[doctor].last_name}
                            <Button
                              onClick={() => {
                                bookAppointment({
                                  time: timeslot,
                                  date: appointmentData.bookingDate,
                                  clinic_id: appointmentData.clinic_id,
                                  patient_account_id: appointmentData.id,
                                  employee_account_id:
                                    appointmentData.doctors[doctor].id,
                                });
                                setTimeout(() => {
                                  window.location.reload(false);
                                }, 500);
                              }}
                              size="sm"
                              variant="success"
                            >
                              Book now
                            </Button>
                          </p>
                        </Popover.Body>
                      </Popover>
                    );
                    const spot = (!JSON.parse(
                      localStorage.getItem("isEmployee")
                    ) && (
                      <td key={Math.random(434235142)}>
                        <OverlayTrigger
                          trigger="click"
                          placement="bottom"
                          overlay={popover2}
                          rootClose
                        >
                          <a
                            style={{
                              cursor: "pointer",
                              color: "transparent",
                            }}
                          >
                            CLICK ME
                          </a>
                        </OverlayTrigger>
                      </td>
                    )) || <td key={Math.random(23432)}></td>;
                    return spot;
                  })) || <td key={Math.random(23432)}></td>}
              </tr>
            );
          })}
      </tbody>
    </Table>
  );
};

export default Schedule;
