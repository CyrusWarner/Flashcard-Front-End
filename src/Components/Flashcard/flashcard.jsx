import React from "react";
import UpdateFlashCardModal from "../UpdateFlashCardModal/updateFlashCardModal";
import ReactCardFlip from "react-card-flip";
import { useState } from "react";
import { Card, Button, Container, Col, Row } from "react-bootstrap";

const Flashcard = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const { getAllCardsFromCollection, currentCollection } = props;

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <Container>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div>
          <Card
            className="border border-primary border-3 mb-2"
            style={{ width: "30rem", height: "30rem" }}
          >
            <Card.Body className="d-flex flex-column">
              <Card.Title className="text-center fs-1">Question:</Card.Title>
              <Card.Text className="text-center fs-3">
                {props.flashcard.question}
              </Card.Text>
              <Button
                className="mt-auto align-self-start"
                onClick={handleClick}
              >
                View Answer
              </Button>
            </Card.Body>
          </Card>
          <div className="d-flex justify-content-around">
            <UpdateFlashCardModal
              flashcard={props.flashcard}
              getAllCardsFromCollection={getAllCardsFromCollection}
              currentCollection={currentCollection}
            />
            <Button className="btn btn-danger">Delete Flashcard</Button>
          </div>
        </div>
        <div>
          <Card
            className="border border-primary border-3 mb-2"
            style={{ width: "30rem", height: "30rem" }}
          >
            <Card.Body className="d-flex flex-column">
              <Card.Title className="text-center fs-1">Answer:</Card.Title>
              <Card.Text className="text-center fs-3">
                {props.flashcard.answer}
              </Card.Text>
              <Button
                className="mt-auto align-self-start"
                onClick={handleClick}
              >
                View Question
              </Button>
            </Card.Body>
          </Card>
          <div className="d-flex justify-content-around">
            <UpdateFlashCardModal
              flashcard={props.flashcard}
              getAllCardsFromCollection={getAllCardsFromCollection}
              currentCollection={currentCollection}
            />
            <Button className="btn btn-danger">Delete Flashcard</Button>
          </div>
        </div>
      </ReactCardFlip>
    </Container>
  );
};
export default Flashcard;
