import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import ListGroup from "react-bootstrap/ListGroup";

const TweetCard = (props) => {
  return (
    <Card className="p-3">
      <Card.Title>{props.username}</Card.Title>
      <Card.Text>{props.text}</Card.Text>
      <Row className="d-flex">
        <ListGroup horizontal className="d-flex justify-content-around">
          <ListGroup.Item style={{ height: "10%" }} className="border-0">
            Like
          </ListGroup.Item>
          <ListGroup.Item style={{ height: "10%" }} className="border-0">
            Dislike
          </ListGroup.Item>
        </ListGroup>
      </Row>
    </Card>
  );
};

export { TweetCard };
