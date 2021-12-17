import { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

const SignUpPage = () => {
  let [password, setPassword] = useState("");
  let [username, setUsername] = useState("");
  const submit_credentials = () => {
    console.log({ username });
    console.log({ password });
  };
  const signUp = () => {
    axios
      .post("http://localhost:3000/auth/sign-up", {
        username: username,
        password: password,
      })
      .then((res) => {
        console.log(res);
      });
  };
  return (
    <Container>
      <Form>
        <h1> Sign Up</h1>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername((username = e.target.value))}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword((password = e.target.value))}
          ></Form.Control>
        </Form.Group>
        <Button onClick={signUp()}>Log In</Button>
      </Form>
    </Container>
  );
};
export { SignUpPage };
