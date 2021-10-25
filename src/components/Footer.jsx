import React from "react";
import Image from "react-bootstrap/Image";
import "./Footer.scss";
import ListGroup from "react-bootstrap/ListGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

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
              <label>Follow us</label>
              <ListGroup className="justify-content-center" horizontal>
                <a className="p-2">
                  <FontAwesomeIcon size="2x" icon={["fab", "github"]} />
                </a>
                <a className="p-2">
                  <FontAwesomeIcon size="2x" icon={["fab", "facebook"]} />
                </a>
                <a className="p-2">
                  <FontAwesomeIcon size="2x" icon={["fab", "twitter"]} />
                </a>
                <a className="p-2">
                  <FontAwesomeIcon size="2x" icon={["fab", "snapchat"]} />
                </a>
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
