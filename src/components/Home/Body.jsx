import React from "react";
import "components/Home/Body.scss";
import Button from "react-bootstrap/Button";
import TestimonialList from "./TestimonialList";

const EmployeeData = [
  {
    id: 1,
    companyName: "Sabertooth",
    description:
      "Wow! This website is amazing. It has made my life working at Sabertooth much easier! Thank you all at Meta Health!",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1061&q=80",
    name: "JANICE KULAS",
    position: "Assistant Manager",
    role: "Employee",
  },
  {
    id: 2,
    companyName: "Health Ontario",
    description:
      "Great Work with this website. The only thing I think that you could improve is the amount of clinics that you support. As mine is currently unsupported",
    image:
      "https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2069&q=80",
    name: "Bryant Franecki",
    position: "Front Desk Receptionist",
    role: "Employee",
  },
];
const PatientData = [
  {
    id: 1,
    companyName: "The Office",
    description:
      "Thank you Meta Health for this website. I would normally have to wait 15-20 minutes longer when I go into a walk-in clinic. But now I go in and the doctor sees me right away",
    image: "https://upload.wikimedia.org/wikipedia/en/d/dc/MichaelScott.png",
    name: "Michael Scott",
    position: "Member since 2021",
    role: "Patient",
  },
  {
    id: 2,
    companyName: "Health Ontario",
    description:
      "Great Work with this website. The only thing I think that you could improve is the amount of clinics that you support. As mine is currently unsupported",
    image: "https://upload.wikimedia.org/wikipedia/en/d/dc/MichaelScott.png",
    name: "Bryant Franecki",
    position: "Member since 2010",
    role: "Patient",
  },
];
const Body = (props) => {
  return (
    <main>
      <div className="middle">
        <img src="https://images.unsplash.com/photo-1558403194-611308249627?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"></img>
        <section>
          <h1>Welcome to Meta Health</h1>
          <p>
            We are a profressional organization, working day and night to make
            getting in touch with a health care provider easier. Whether you are
            looking for a family doctor, a walk-in clinic, a physiotherapist, or
            anything in between, we will help you.
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
    </main>
  );
};

export default Body;
