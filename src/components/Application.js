import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import "components/Application.scss";
import Home from "./Home/Home";
import Footer from "./Footer";
import LoggedInPatient from "./Navbar/LoggedState/LoggedInPatient";
import Navbar from "./Navbar/NavHeader";
import LoginSelectionPanel from "./Register_and_Login_Selection/LoginSelectionPanel";
export default function Application(props) {
  return (
    <>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={LoginSelectionPanel} />
      </Switch>
      <Footer></Footer>
    </>
  );
}
