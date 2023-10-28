import React, { useState, useEffect } from "react";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import "components/Home/Header.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = (props) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <div
        className={`${
          props.loggedIn ? "add-padding" : ""
        } top-bar d-flex justify-content-center align-items-center flex-column sticky ${
          (scrollPosition >= 465 && "hidden") || "visible"
        }`}
      >
        <h2 className="text-dark fs-5">
          Meta Health has just started a new patient referral promotion
        </h2>
        <Button className="promo-button" variant="outline-warning">
          Get More Info
        </Button>
      </div>

      <div className="professionals">
        <Image src="images/M.H.png" />
        <h2>
          A <span>Good</span> and <span>Healthy</span> body is the reason behind
          a healthy mind. <br />
        </h2>
        <p>
          Meta Health, connecting patients with health care professionals since
          2021.
        </p>
      </div>
    </header>
  );
};

export default Header;
