import React from "react";
import Header from "./Header";
import Body from "./Body";
import Button from "components/Button";

const Home = (props) => {
  return (
    <>
      <Button>Login</Button>
      <Header></Header>
      <Body></Body>
    </>
  );
};

export default Home;
