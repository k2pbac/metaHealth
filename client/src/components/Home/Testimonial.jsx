import React from "react";
import Image from "react-bootstrap/Image";
import "./Testimonial.scss";
import Card from "react-bootstrap/Card";
const Testimonial = ({
  companyName,
  description,
  image,
  name,
  position,
  role,
}) => {
  return (
    <Card className="shadow-sm" style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title className="text-muted">
          {companyName}{" "}
          <Card.Subtitle className="mb-2 text-muted d-inline">
            ({role})
          </Card.Subtitle>
        </Card.Title>
        <Image
          className="quotes"
          alt="quotation marks"
          src="images/quotes.png"
        ></Image>

        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <div className="d-flex align-items-end">
        <Card.Img className="pr-2" variant="bottom" src={image} />
        <div className="d-flex flex-column">
          <Card.Subtitle className="mr-2">{name}</Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">{position}</Card.Subtitle>
        </div>
      </div>
    </Card>
  );
};

export default Testimonial;
