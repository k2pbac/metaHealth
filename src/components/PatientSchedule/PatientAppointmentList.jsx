import React, { useState, useEffect } from "react";
import "./PatientAppointmentList.scss";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import {
  CardGroup,
  Row,
  Tabs,
  Tab,
  Col,
  Form,
  FloatingLabel,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import { getPatientAppointments } from "helpers/selectors";
const PatientAppointmentList = (props) => {
  const [currentData, setCurrentData] = useState({
    data: {},
    index: null,
    name: "Clinics",
  });
  const userLogged = useSelector((state) => state.userLogged);
  const { match, appState } = props;

  const [appointmentData, setAppointmentData] = useState({});

  useEffect(() => {
    if (Object.keys(appState).length) {
      setAppointmentData(getPatientAppointments(appState, userLogged.user.id));
    }
  }, [appState, match.params.id]);

  const data = {};

  appointmentData &&
    Object.keys(appointmentData).length &&
    Object.keys(appointmentData.appointments).map((appointment) => {
      appointmentData.appointments[appointment].map((elements) => {
        const newElement = (
          <Col key={elements.id} className="shadow-sm p-4">
            <p>
              {elements.date + " "}
              {parseInt(elements.time) > 12
                ? parseInt(elements.time) - 12 + ":00 PM"
                : parseInt(elements.time) + ":00 AM"}
            </p>
          </Col>
        );
        if (data[appointment]) {
          data[appointment].push(newElement);
        } else data[appointment] = [newElement];
      });
    });

  return (
    <Container className="justify-content-center align-items-center text-center d-flex flex-column shadow w-75">
      <h1 className="my-4">Upcoming Appointments</h1>
      {/* <FloatingLabel controlId="floatingSelect" label="Works with selects"> */}
      <Form.Select
        className="w-25"
        aria-label="Floating label select example"
        value={currentData.name}
        onChange={(e) => {
          var index = e.target.selectedIndex;
          setCurrentData({
            data: e.target.value,
            index: index,
          });
        }}
      >
        <option>Clinics</option>
        {appointmentData &&
          Array.isArray(appointmentData.clinics) &&
          appointmentData.clinics.length &&
          appointmentData.clinics.map((clinic, index) => {
            return (
              <option key={index} id={index} name={index} value={clinic.name}>
                {clinic.name}
              </option>
            );
          })}
      </Form.Select>
      <Container className="">
        {currentData.index && (
          <>
            <h3>
              {appointmentData.clinics[parseInt(currentData.index) - 1].name}
            </h3>
            <p className="fs-5">{appointmentData.address}</p>
            <Row className="p-3">
              {data &&
                Object.keys(data).length !== 0 &&
                Object.keys(data).map((el) => {
                  return (
                    parseInt(currentData.index) === parseInt(el) + 1 && (
                      <div key={data[el]}>{data[el]}</div>
                    )
                  );
                })}
            </Row>
          </>
        )}
      </Container>
    </Container>
  );
};

export default PatientAppointmentList;
