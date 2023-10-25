import React from "react";

import { render, cleanup, fireEvent } from "@testing-library/react";

import RegisterForm from "components/RegisterForm/RegisterForm";

afterEach(cleanup);

it("renders without crashing", () => {
  render(<Form />);
});

it("renders a clickable button", () => {
  const handleClick = jest.fn();
  const { getByText } = render(<Form></Form>);

  const button = getByText("User Info");

  fireEvent.click(button);

  expect(handleClick).toHaveBeenCalledTimes(1);
});
