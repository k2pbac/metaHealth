import React from "react";
import classNames from "classnames"
import 'bootstrap/dist/css/bootstrap.min.css';

import Image from 'react-bootstrap/Image';

import "components/View_Profile/Profile.scss"


export default function EmployeeProfile(props) {

  const {
    name, 
    username,
    avatar, 
    date_of_birth, 
    profile_decription,
    phone_number,
    email_address,
    address,
    insurance_member_id,
    insurance_policy_number,
    insurance_plan_name,
  } = props;

  const navClass = classNames('view-profile');

  

  return (
    <div className="profile">
      <Image class = "profile-image" src={avatar} alt = {name} roundedCircle></Image>
      <div class = "profile-name">{name}</div>
      <div class = "profile-username">{username}</div>
      <div class = "profile-dob">{date_of_birth}</div>
      <div class = "profile-desription">{profile_decription}</div>
      <div class = "profile-phone">{phone_number}</div>
      <div class = "profile-email">{email_address}</div>
      <div class = "profile-address">{address}</div>
      <div class = "profile-insid">{insurance_member_id}</div>
      <div class = "profile-polnum">{insurance_policy_number}</div>
      <div class = "profile-insplan">{insurance_plan_name}</div>
    </div>
  )
}