import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { Form as BootstrapForm } from "react-bootstrap";
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
    formFieldObject[key] = {};
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
    console.log(formValues);
    setFormValues((prev) => {
      let newForm = Object.assign({}, prev);
      if (event.target.type === "radio") {
        for (let el in newForm[event.target.value]) {
          newForm[event.target.value][el] = false;
        }
        if (event.target.checked) {
          newForm[event.target.value][event.target.name] = true;
        }
      } else {
        newForm[event.target.name]["value"] = event.target.value;
      }
      return newForm;
    });
    if (!badgesInfo[infoSelected].filledFields[event.target.id]) {
      badgesInfo[infoSelected].filledFields[event.target.id] = true;
      setBadgesInfo((prev) => ({
        ...prev,
        ...prev[infoSelected].currentVal++,
      }));
    } else {
      if (
        !event.target.value.length ||
        (event.target.type === "radio" && event.target.checked === false)
      ) {
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
            pill
            bg={`${
              badgesInfo[`badge${index + 1}`].currentVal <
                badgesInfo[`badge${index + 1}`].totalFields || "success"
            }`}
          >
            {badgesInfo[`badge${index + 1}`].currentVal}/
            {badgesInfo[`badge${index + 1}`].totalFields}
          </Badge>
        </div>
        {infoSelected === `badge${index + 1}` && (
          <FadeIn>
            {formData.fields[key].map((el) => (
              <BootstrapForm.Group className=" mx-auto my-3" key={el.value}>
                {(el.type !== "radio" && (
                  <>
                    <BootstrapForm.Label>{el.value}</BootstrapForm.Label>
                    <BootstrapForm.Control
                      id={el.value}
                      name={el.value}
                      value={formValues[el.value]["value"]}
                      type={el.type}
                      placeholder={`Enter a ${el.value}`}
                      onChange={handleInputChange}
                      autoComplete="on"
                      className="mx-auto text-center"
                    />
                  </>
                )) || (
                  <div className={"form-group"}>
                    <BootstrapForm.Label className="d-block">
                      {el.value}
                    </BootstrapForm.Label>
                    <div className="d-flex justify-content-center">
                      {el.options.map((option) => (
                        <div
                          key={option}
                          className="d-flex justify-content-center align-items-center"
                        >
                          <label className={"control-label"} htmlFor={el.value}>
                            {option}
                          </label>
                          <input
                            className="radio-input"
                            name={option}
                            onChange={handleInputChange}
                            type={el.type}
                            value={el.value}
                            checked={formValues[el.value][option] || false}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </BootstrapForm.Group>
            ))}
          </FadeIn>
        )}
      </div>
    );
  });

  return (
    <Container className="text-center shadow-sm border p-5 form m-auto">
      <h1 className="mb-5">{formData["type"]} Registration </h1>
      <BootstrapForm className="w-50 m-auto">
        {formInputs}
        <Button
          className="mt-5"
          size="sm"
          variant="outline-success"
          type="submit"
          onSubmit={(e) => handleSubmit(e)}
        >
          Submit
        </Button>
      </BootstrapForm>
      <span className="d-block mt-4">
        Already a user? <a href="#!">Login</a>
      </span>
    </Container>
  );
};

export default Form;
