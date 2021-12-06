import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <ListGroup style={{ width: "30%" }}>
      <ListGroup.Item>
        <Link to="/">Home</Link>
      </ListGroup.Item>
      <ListGroup.Item>
        <Link to="/messages">Messages</Link>
      </ListGroup.Item>
      <ListGroup.Item>
        <Link to="/profile">Profile</Link>
      </ListGroup.Item>
      <ListGroup.Item>
        <Link to="/log-in">Log In</Link>
      </ListGroup.Item>
      <ListGroup.Item>
        <Link to="/sign-up">Sign Up</Link>
      </ListGroup.Item>
      <ListGroup.Item>
        <Link to="/log-out">Sign Out</Link>
      </ListGroup.Item>
      <Button>Tweet</Button>
    </ListGroup>
  );
};

export { Sidebar };
