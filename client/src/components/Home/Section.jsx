import React from "react";
import Image from "react-bootstrap/Image";
import "./Section.scss";

const Section = (props) => {
  const reverseSection = "flex-row-reverse";
  return (
    <section className="d-flex flex-column justify-content-center section">
      <hr className="my-5 mx-auto" />
      <div
        className={`content d-flex justify-content-center ${
          props.reverse && reverseSection
        }`}
      >
        <p>
          Living a healthy life is much easier with quick access to health care
          professionals. <a href="#!"> Register now </a> as a patient with Meta
          Health to start booking appointments with ease.
        </p>

        <Image src="https://images.unsplash.com/photo-1542353436-312f0e1f67ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1542&q=80"></Image>
      </div>
    </section>
  );
};

export default Section;
