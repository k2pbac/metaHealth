import React from "react";
import "components/Home/Body.scss";
import Button from "react-bootstrap/Button";
import TestimonialList from "./TestimonialList";
import Row from "react-bootstrap/Row";
import Column from "react-bootstrap/Col";

const Body = (props) => {
  return (
    <main>
      <Row className="more-info">
        <div className="middle">
          <img src="https://images.unsplash.com/photo-1558403194-611308249627?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"></img>
          <section>
            <h1>Welcome to Meta Health</h1>
            <p>
              We are a profressional organization, working day and night to make
              getting in touch with a health care provider easier. Whether you
              are looking for a family doctor, a walk-in clinic, a
              physiotherapist, or anything in between, we will help you.
            </p>
            <Button
              variant="outline-dark"
              size="lg"
              className="blue-outline rounded-0"
            >
              Get More Info
            </Button>
          </section>
        </div>
      </Row>
    </main>
  );
};

export default Body;
