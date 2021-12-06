import { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const LoginPage = () => {
  let [password, setPassword] = useState("");
  let [username, setUsername] = useState("");
  const submit_credentials = () => {
    console.log({ username });
    console.log({ password });
  };
  return (
    <Container>
      <Form>
        <h1>Log In</h1>
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
        <Button onClick={submit_credentials}>Log In</Button>
      </Form>
    </Container>
  );
};
export { LoginPage };
