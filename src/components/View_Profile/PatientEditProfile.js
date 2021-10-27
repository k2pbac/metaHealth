import React from "react";
import classNames from "classnames"
import 'bootstrap/dist/css/bootstrap.min.css';

import Image from 'react-bootstrap/Image';
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form'

import "components/View_Profile/Profile.scss"


export default function PatientEditProfile(props) {

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
    onSubmit,
    onBack
  } = props;

  const navClass = classNames('view-profile');



  return (
    <Form>
      <div className="profile">
        <section className="left-section">
          <Image className="profile-image" src={avatar} alt={name}></Image>
          <Button variant="outline-dark"
            size="lg"
            className="blue-outline rounded-0" 
            onClick = {onSubmit}
            >Submit</Button>
          <Button variant="outline-dark"
            size="lg"
            className="blue-outline rounded-0"
            onClick = {onBack}
            >Back</Button> 
        </section>

        <section className="middle-section">
          <div className="personal">
            <h1>Personal Information: </h1>
            <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" placeholder={name} />
            </Form.Group>
        
            <Form.Group className="mb-3" controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="username" placeholder={username}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDob">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control type="dateOfBirth" placeholder={date_of_birth}/>
            </Form.Group>
         
            <Form.Group className="mb-3" controlId="formAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control type="address" placeholder={address}/>
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formProfileDescription">
            <Form.Label>Profile Description</Form.Label>
            <Form.Control type="profileDescription" as="textarea" placeholder={profile_decription}/>
            </Form.Group>
          </div>
        </section>

        <section className="right-section">
          <div className="contact">
            <h1>Contact Information:</h1>
            <Form.Group className="mb-3" controlId="formPhone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="phoneNumber" placeholder={phone_number}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder={email_address}/>
            </Form.Group>
          </div>

          <div className="medical">
            <h1>Medical Information</h1>
            <Form.Group className="mb-3" controlId="formInsId">
            <Form.Label>Insurance ID No.</Form.Label>
            <Form.Control type="insId" placeholder={insurance_member_id}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formInsPol">
            <Form.Label>Insurance Policy No.</Form.Label>
            <Form.Control type="insPol" placeholder={insurance_policy_number}/>
            </Form.Group>
           
            <Form.Group className="mb-3" controlId="formInsPlan">
            <Form.Label>Insurance Policy Plan</Form.Label>
            <Form.Control type="insPlanName" placeholder={insurance_plan_name}/>
            </Form.Group>
          </div>
        </section>
      </div>
    </Form>
  )
}