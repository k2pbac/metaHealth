import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "components/Application.scss";
import Home from "./Home/Home";
import Footer from "./Footer";
import LoggedInPatient from "./Navbar/LoggedState/LoggedInPatient";

export default function Application(props) {
  return (
    <>
      <LoggedInPatient></LoggedInPatient>
      <Home></Home>
      <Footer></Footer>
    </>
  );
}
