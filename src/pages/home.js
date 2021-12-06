import { useState } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

const Homepage = () => {
  let [newTweet, setNewTweet] = useState("");
  return (
    <Container>
      <Col>Tweets go here</Col>
    </Container>
  );
};

export { Homepage };
