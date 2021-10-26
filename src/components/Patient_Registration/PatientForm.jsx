import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./PatientForm.scss";
import FadeIn from "react-fade-in";
import Badge from "react-bootstrap/Badge";

const PatientForm = ({ formData }) => {
  const [infoSelected, setInfoSelected] = useState("");
  const formBadges = {};
  let count = 1;
  for (let data in formData.fields) {
    formBadges[`badge${count}`] = {
      currentVal: 0,
      totalFields: formData.fields[data].length,
      filledFields: {},
    };
    count++;
  }
  const [badgesInfo, setBadgesInfo] = useState({
    ...formBadges,
  });

  let formArray = [
    ...Object.keys(formData.fields)
      .map((key) => formData.fields[key].map((el) => el.value))
      .flat(),
  ];
  let formFieldObject = {};
  for (const key of formArray) {
    formFieldObject[key] = "";
  }
  const [formValues, setFormValues] = useState({
    ...formFieldObject,
  });

  const handleClick = (viewNumber) => {
    if (viewNumber === infoSelected) setInfoSelected(0);
    else setInfoSelected(viewNumber);
  };
  const handleInputChange = (event) => {
    event.persist();
    setFormValues((prev) => {
      let newForm = Object.assign({}, prev);
      newForm[event.target.name] = event.target.value;
      return newForm;
    });
    if (!badgesInfo[infoSelected].filledFields[event.target.id]) {
      badgesInfo[infoSelected].filledFields[event.target.id] = true;
      setBadgesInfo((prev) => ({
        ...prev,
        ...prev[infoSelected].currentVal++,
      }));
    } else {
      if (!event.target.value.length) {
        setBadgesInfo((prev) => {
          delete prev[infoSelected].filledFields[event.target.id];
          return {
            ...prev,
            ...prev[infoSelected].currentVal--,
          };
        });
      }
    }
  };

  const formInputs = Object.keys(formData.fields).map((key, index) => {
    return (
      <div key={index}>
        <div
          className="mb-2 hvr-fade info bg-light d-flex justify-content-center align-items-center border"
          onClick={() => handleClick(`badge${index + 1}`)}
        >
          {key}
          <Badge
            bg={`${
              (badgesInfo[`badge${index + 1}`].currentVal <
                badgesInfo[`badge${index + 1}`].totalFields &&
                "secondary") ||
              "success"
            }`}
          >
            {badgesInfo[`badge${index + 1}`].currentVal}/
            {badgesInfo[`badge${index + 1}`].totalFields}
          </Badge>
        </div>
        {infoSelected === `badge${index + 1}` && (
          <FadeIn>
            {formData.fields[key].map((el) => (
              <Form.Group className="mb-1" controlId={el.value} key={el.value}>
                <Form.Label>{el.value}</Form.Label>
                <Form.Control
                  name={el.value}
                  value={formValues.username}
                  type={el.text}
                  placeholder={`Enter a ${el.value}`}
                  onChange={handleInputChange}
                />
              </Form.Group>
            ))}
          </FadeIn>
        )}
      </div>
    );
  });

  return (
    <Container className="text-center shadow-sm border p-5 patient-form m-auto">
      <h1 className="mb-5">{formData["type"]} Registration</h1>
      <Form className="w-50 m-auto">
        {formInputs}
        <Button className="mt-5" size="sm" variant="success" type="submit">
          Submit
        </Button>
      </Form>
      <span className="d-block mt-4">
        Already a user? <a href="#!">Login</a>
      </span>
    </Container>
  );
};

export default PatientForm;
