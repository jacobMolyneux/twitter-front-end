import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import ListGroup from "react-bootstrap/ListGroup";
import { useState } from "react";
import LikedHeart from "../../images/liked_heart.png";
import UnlikedHeart from "../../images/unliked_heart.png";

const TweetCard = (props) => {
  let [like, setLike] = useState(false);
  let [dislike, setDislike] = useState(false);

  const likeTweet = () => {
    if (like === true) {
      setLike((like = false));
      setDislike((dislike = false));
    } else if (like === false) {
      setLike((like = true));
      setDislike((dislike = false));
    }
  };
  if (like === false) {
    return (
      <Card className="p-3">
        <Card.Title>{props.username}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        <Row className="d-flex">
          <ListGroup horizontal className="d-flex justify-content-around">
            <ListGroup.Item
              style={{ height: "10%" }}
              className="border-0"
              onClick={likeTweet}
            >
              <img
                src={UnlikedHeart}
                style={{ width: "10%", height: "auto" }}
              />
            </ListGroup.Item>
          </ListGroup>
        </Row>
      </Card>
    );
  } else if (like === true) {
    return (
      <Card className="p-3">
        <Card.Title>{props.username}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        <Row className="d-flex">
          <ListGroup horizontal className="d-flex justify-content-around">
            <ListGroup.Item
              style={{ height: "10%" }}
              className="border-0"
              onClick={likeTweet}
            >
              <img src={LikedHeart} style={{ width: "10%", height: "auto" }} />
            </ListGroup.Item>
          </ListGroup>
        </Row>
      </Card>
    );
  }
};

export { TweetCard };
