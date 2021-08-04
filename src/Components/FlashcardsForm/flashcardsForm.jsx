import axios from "axios";
import React from "react";
import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

const FlashcardsForm = (props) => {
  const initialInputState = { question: "", answer: "" };
  const [eachEntry, seteachEntry] = useState(initialInputState);
  const [show, setShow] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    submitFlashcard();
  };
  const submitFlashcard = async () => {
    let currentCollectionId = props.currentCollection.id;
    const data = {
      collection: currentCollectionId,
      question: eachEntry.question,
      answer: eachEntry.answer,
    };
    await axios.post("http://127.0.0.1:8000/flashcard/post_flashcard/", data);
    seteachEntry({ question: "", answer: "" });
    props.getAllCardsFromCollection(props.currentCollection);
  };
  const handleChange = (event) => {
    seteachEntry({ ...eachEntry, [event.target.name]: event.target.value });
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <React.Fragment>
      <Button variant="primary" onClick={handleShow}>
        Submit New Flashcard
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{props.currentCollection.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group onSubmit={(event) => handleSubmit(event)}>
            <label>Question:</label>
            <Form.Control
              type="text"
              name="question"
              onChange={handleChange}
              placeholder="Write a question..."
              value={eachEntry.question}
            ></Form.Control>
            <label>Answer:</label>
            <Form.Control
              type="text"
              name="answer"
              placeholder="Write a answer..."
              onChange={handleChange}
              value={eachEntry.answer}
            ></Form.Control>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            type="submit"
            onClick={(event) => [handleSubmit(event), handleClose()]}
          >
            Submit New Flashcard
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default FlashcardsForm;
