import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { Form as bForm } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./Form.scss";
import FadeIn from "react-fade-in";
import Badge from "react-bootstrap/Badge";

const Form = ({ formData }) => {
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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
  };

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
              <bForm.Group
                className=" w-50 mx-auto my-3"
                controlId={el.value}
                key={el.value}
              >
                <bForm.Label>{el.value}</bForm.Label>
                <bForm.Control
                  name={el.value}
                  value={formValues[el.value]}
                  type={el.type}
                  placeholder={`Enter a ${el.value}`}
                  onChange={handleInputChange}
                  autoComplete="on"
                  className="text-center"
                />
              </bForm.Group>
            ))}
          </FadeIn>
        )}
      </div>
    );
  });

  return (
    <Container className="text-center shadow-sm border p-5 form m-auto">
      <h1 className="mb-5">{formData["type"]} Registration</h1>
      <bForm className="w-50 m-auto">
        {formInputs}
        <Button
          className="mt-5"
          size="sm"
          variant="success"
          type="submit"
          onSubmit={(e) => handleSubmit(e)}
        >
          Submit
        </Button>
      </bForm>
      <span className="d-block mt-4">
        Already a user? <a href="#!">Login</a>
      </span>
    </Container>
  );
};

export default Form;
