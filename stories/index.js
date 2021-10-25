import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import "index.scss";
import Home from "components/Home/Home";
import Body from "components/Home/Body";
import Header from "components/Home/Header";
import Testimonial from "components/Home/Testimonial";

storiesOf("Home", module)
  .add("Header", () => <Header></Header>)
  .add("Body", () => <Body></Body>)
  .add("Employee-Testimonials", () => (
    <Testimonial
      companyName="Sabertooth"
      description="Wow! This application is amazing. It has made my life working at Sabertooth much easier! Thank you all at Meta Health!"
      image="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1061&q=80"
      name="JANICE KULAS"
      position="Assistant Manager"
    ></Testimonial>
  ))
  .add("Patient-Testimonials", () => <Testimonial></Testimonial>);
