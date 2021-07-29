import React from "react";
import UpdateFlashCardModal from "../UpdateFlashCardModal/updateFlashCardModal";
import ReactCardFlip from "react-card-flip";
import { useState } from "react";
import { Card, Button, Container, Row } from "react-bootstrap";

const Flashcard = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const { getAllCardsFromCollection, currentCollection } = props;

  const handleClick = (event) => {
    setIsFlipped(!isFlipped);
  };
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
            <Card.Text>{props.flashcard.question}</Card.Text>
            <button onClick={handleClick}>Click to flip</button>
          </Card.Body>
        </Card>
        <UpdateFlashCardModal
        flashcard={props.flashcard}
        getAllCardsFromCollection={getAllCardsFromCollection}
        currentCollection={currentCollection}
      /> 
      </div>
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
            <Card.Text>{props.flashcard.answer}</Card.Text>
            <button onClick={handleClick}>Click to flip</button>
          </Card.Body>
        </Card>
        <UpdateFlashCardModal
        flashcard={props.flashcard}
        getAllCardsFromCollection={getAllCardsFromCollection}
        currentCollection={currentCollection}
      /> 
      </div>
    </ReactCardFlip>
  );
};
export default Flashcard;
