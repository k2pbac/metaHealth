import React from "react";

import { render, cleanup, fireEvent } from "@testing-library/react";

import PatientForm from "components/Patient_Registration/PatientForm";

afterEach(cleanup);

it("renders without crashing", () => {
  render(<PatientForm />);
});

it("renders a clickable button", () => {
  const handleClick = jest.fn();
  const { getByText } = render(<PatientForm></PatientForm>);

  const button = getByText("User Info");

  fireEvent.click(button);

  expect(handleClick).toHaveBeenCalledTimes(1);
});
