import { useState } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { TweetCard } from "./components/tweetCard";
import axios from "axios";
import Row from "react-bootstrap/Row";

const Homepage = () => {
  let [newTweet, setNewTweet] = useState("");
  let [tweetList, setTweetList] = useState([
    "I am Iron Man",
    "HULK SMASH",
    "Hello World",
  ]);
  const createTweet = () => {
    setTweetList(tweetList.concat(newTweet));
    setNewTweet((newTweet = ""));
    sendTweet(newTweet);
  };

  // send a new tweet to the DB using a post request
  const sendTweet = (data) => {
    const tweetData = newTweet;
    axios
      .post("http://localhost:3000/create-tweet", {
        text: tweetData,
        author: "test author",
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };
  return (
    <Container style={{ width: "60%" }}>
      <Form>
        <Form.Control
          as="textarea"
          rows={"3"}
          onChange={(e) => setNewTweet((newTweet = e.target.value))}
        ></Form.Control>
        <Row className="d-flex justify-content-end">
          <Button
            onClick={createTweet}
            style={{ width: "10%" }}
            className="m-1 me-3"
          >
            Tweet
          </Button>
        </Row>
      </Form>
      <Col>
        {tweetList.map((tweet) => (
          <TweetCard username="user" text={tweet} />
        ))}
      </Col>
    </Container>
  );
};

export { Homepage };
