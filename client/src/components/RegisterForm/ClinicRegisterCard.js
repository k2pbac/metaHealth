import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";
// import "components/BookAppointments/BookAppointments.scss";
import "components/RegisterForm/RegisterToAClinicForm.scss";

export default function ClinicRegisterCard(props) {
  const { name, address, image, id } = props;

  const storeClinic = () => {
    localStorage.setItem("clinic_id", id);
    localStorage.setItem("clinic_name", name);
    localStorage.setItem("clinic_address", address);
  };

  return (
    <div onClick={storeClinic} className="clinic-card">
      <div className="inline">
        <input type="checkbox" id="demo" />
        <label for="demo"></label>
      </div>

      <div className="clinic-image-container">
        <Image className="clinic-image" src={image} alt={name}></Image>
      </div>
      <div className="clinic-name">{name}</div>
      <div className="clinic-address">{address}</div>
    </div>
  );
}
