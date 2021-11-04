import React, { useState, useEffect } from "react";
import "./PatientAppointmentList.scss";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { CardGroup, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getPatientAppointments } from "helpers/selectors";
const PatientAppointmentList = (props) => {
  const userLogged = useSelector((state) => state.userLogged);
  const { match, appState } = props;

  const [appointmentData, setAppointmentData] = useState({});

  useEffect(() => {
    if (Object.keys(appState).length) {
      setAppointmentData(getPatientAppointments(appState, userLogged.user.id));
    }
  }, [appState, match.params.id]);

  useEffect(() => {
    console.log(appointmentData);
  }, [appointmentData]);

  return (
    <Container className="justify-content-center align-items-center text-center d-flex flex-column shadow w-75">
      <h1 className="">Upcoming Appointments</h1>

      <Container className="">
        <h3>{appointmentData.name}</h3>
        <p className="fs-5">{appointmentData.address}</p>
        <Row className="p-3 g-3">
          {appointmentData &&
            Object.keys(appointmentData).length &&
            Object.keys(appointmentData.appointments).map((appointment) => {
              return (
                <Col className="shadow-sm p-4" xs={{ span: 4, offset: 1 }}>
                  <p>
                    {appointmentData.appointments[appointment].date + " "}
                    {parseInt(appointmentData.appointments[appointment].time) >
                    12
                      ? parseInt(
                          appointmentData.appointments[appointment].time
                        ) -
                        12 +
                        ":00 PM"
                      : parseInt(
                          appointmentData.appointments[appointment].time
                        ) + ":00 AM"}
                  </p>
                </Col>
              );
            })}
        </Row>
      </Container>
    </Container>
  );
};

export default PatientAppointmentList;
