import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import "components/Application.scss";

import LoggedInPatient from "./Navbar/LoggedState/LoggedInPatient";

export default function Application(props) {
  return <main>
<LoggedInPatient></LoggedInPatient>


  </main>;
}
