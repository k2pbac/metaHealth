import React from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import "components/Home/Header.scss";
const Header = (props) => {
  return (
    <Container fluid>
      <header>
        <div className="professionals">
          <Image src="images/M.H.png" thumbnail />
          <h2>
            A <span>Good</span> and <span>Healthy</span> body is the reason
            behind a healthy mind. <br />
          </h2>
          <p>
            Meta Health, connecting patients with health care professionals
            since 2021.
          </p>
        </div>
        <div className="middle">
          <img src="https://images.unsplash.com/photo-1558403194-611308249627?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"></img>
          <section>
            <h1>Welcome to Meta Health</h1>
          </section>
        </div>
      </header>
    </Container>
  );
};

export default Header;
