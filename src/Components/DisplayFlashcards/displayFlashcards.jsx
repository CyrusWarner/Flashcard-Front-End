import React, {useState} from "react";
import Flashcard from "./../Flashcard/flashcard";
import FlashcardsForm from "../FlashcardsForm/flashcardsForm";
import { Container, Col, Row, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import "./displayFlashcards.css";
import AllFlashcards from "../AllFlashcards/allFlashcards";

const pageTransition = {
  in: {
    opacity: 1,
    x: 0
  },
  out: {
    opacity: 0,
    x: "-100vh"
  }
}

const DisplayFlashcards = (props) => {
  const [showing, setShowing] = useState(false)
  console.log(showing)
  let currentCollection;
  let getAllCardsFromCollection;
  let currentFlashcard;
  let description;
  let flashcardNumber;
  let currentCollectionOfFlashcardsLength;
  let collectionName;

  if (props.currentCollectionOfFlashcards.length !== 0) {
    currentCollection = props.currentCollection;
    getAllCardsFromCollection = props.getAllCardsFromCollection;
    description = props.currentCollection.description;
    flashcardNumber = props.flashcardNumber + 1;
    currentCollectionOfFlashcardsLength =
      props.currentCollectionOfFlashcards.length;
    collectionName =
      currentCollection.name.charAt(0).toUpperCase() +
      currentCollection.name.slice(1);
      currentFlashcard =
      props.currentCollectionOfFlashcards[props.flashcardNumber];
  }
  //MAKES FIRST LETTER UPPERCASE FOR THE CURRENT COLLECTION

  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransition}
    >
      <Container style={{ marginLeft: "0px" }}>
        <div>
          <h1 className="flashcard-title mb-0">{collectionName}</h1>
        </div>
        {props.currentCollectionOfFlashcards.length !== 0 && (
          <p className="lead mt-3">
            {description}
            <div style={{ marginTop: "1rem" }}>
              Flashcards: {currentCollectionOfFlashcardsLength}
            </div>
            <div>
              Current flashcard: {flashcardNumber}/
              {currentCollectionOfFlashcardsLength}
            </div>
          </p>
        )}
      </Container>
      {props.currentCollectionOfFlashcards.length === 0 && (
        <h1>Please create a flashcard to begin collection</h1>
      )}
      <Container style={{ marginLeft: "0px" }}>
        <Row>
          <Col>
            <FlashcardsForm
              currentCollection={props.currentCollection}
              getAllCardsFromCollection={props.getAllCardsFromCollection}
            />
          </Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
      {props.currentCollectionOfFlashcards.length !== 0 && (
        <Container>
          <Row className="align-items-center">
            <Col className="g-0 d-flex justify-content-start">
              <Button
                className="rounded-pill"
                onClick={() => props.previousFlashcard()}
              >
                <i className="bi bi-arrow-left-circle-fill">
                  {" "}
                  Previous Flashcard
                </i>
              </Button>
            </Col>
            <Col>
              <Flashcard
                deleteFlashcard={props.deleteFlashcard}
                flashcard={props.flashcard}
                getAllCardsFromCollection={getAllCardsFromCollection}
                currentCollection={currentCollection}
              />
            </Col>
            <Col className="g-0 d-flex justify-content-end">
              <Button
                className="rounded-pill"
                onClick={() => props.nextFlashcard()}
              >
                <i className="bi bi-arrow-right-circle-fill"> Next Flashcard</i>
              </Button>
            </Col>
          </Row>
        </Container>
      )}
      <Button onClick={() => setShowing(!showing)}> Show All Flashcards
      </Button>
      {showing === true &&
      <AllFlashcards currentCollectionOfFlashcards={props.currentCollectionOfFlashcards}/>
      }
        
    </motion.div>
  );
};

export default DisplayFlashcards;
