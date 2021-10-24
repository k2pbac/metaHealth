import React from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import "components/Home/Header.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = (props) => {
  return (
    <Container fluid>
      <header>
        <div className="professionals">
          <Image src="images/M.H.png" />
          <h2>
            A <span>Good</span> and <span>Healthy</span> body is the reason
            behind a healthy mind. <br />
          </h2>
          <p>
            Meta Health, connecting patients with health care professionals
            since 2021.
          </p>
        </div>
      </header>
    </Container>
  );
};

export default Header;
