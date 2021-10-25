import React from "react";
import Image from "react-bootstrap/Image";
import "./Footer.scss";
import ListGroup from "react-bootstrap/ListGroup";
const Footer = (props) => {
  return (
    <footer className="page-footer pt-4">
      <div className="container-fluid text-center text-md-left">
        <div className="row justify-content-around">
          <div className="col-md-6 mt-md-0 mt-5">
            <div className="d-flex flex-column p-0">
              <p>
                <span className="fs-5">M</span>eta Health, connecting patients
                with health care professionals since 2021.
              </p>
              <label for="basic-url">Follow us</label>
              <ListGroup className="justify-content-center" horizontal>
                <Image
                  className="p-2"
                  src="https://img.icons8.com/color/36/000000/twitter--v1.png"
                />
                <Image
                  className="p-2"
                  src="https://img.icons8.com/nolan/36/instagram-new.png"
                ></Image>
                <Image
                  className="p-2"
                  src="https://img.icons8.com/color/36/000000/facebook.png"
                ></Image>
                <Image src="https://img.icons8.com/plasticine/48/000000/snapchat.png" />
              </ListGroup>
            </div>
          </div>
          <hr className="clearfix w-100 d-md-none pb-3" />
          <div className="col-md-3 mb-md-0 mb-3">
            <ul className="list-unstyled">
              <li>
                <a href="#!">Terms and Policies</a>
              </li>
              <li>
                <a href="#!">Contact Us</a>
              </li>
              <li>
                <a href="#!">Employee Services</a>
              </li>
              <li>
                <a href="#!">Patient Services</a>
              </li>
            </ul>
          </div>{" "}
        </div>
      </div>

      <div className="footer-copyright text-center py-3">
        © 2020 Copyright{" "}
        <Image
          className="logo"
          src="images/logo.png"
          alt="Meta Health Logo"
        ></Image>
      </div>
    </footer>
  );
};

export default Footer;
