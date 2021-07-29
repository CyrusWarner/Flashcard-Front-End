import axios from "axios";
import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const UpdateFlashCardModal = (props) => {
  const [show, setShow] = useState(false);
  const initialInputState = {
    question: props.flashcard.question,
    answer: props.flashcard.answer,
  };
  const [eachEntry, setEachEntry] = useState(initialInputState);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateFlashcard();
  };
  const updateFlashcard = async () => {
    let flashcardId = props.flashcard.id;
    let collectionId = props.flashcard.collection;
    debugger;
    const data = {
      id: flashcardId,
      collection: collectionId,
      question: eachEntry.question,
      answer: eachEntry.answer,
    };
    await axios.put(`http://127.0.0.1:8000/flashcard/${flashcardId}/`, data);
    props.getAllCardsFromCollection(props.currentCollection)
  };
  const handleChange = (event) => {
    setEachEntry({ ...eachEntry, [event.target.name]: event.target.value });
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Update Flashcard
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <label>Question:</label>
            <Form.Control
              type="text"
              name="question"
              defaultValue={props.flashcard.question}
              onChange={handleChange}
            ></Form.Control>
            <label>Answer:</label>
            <Form.Control
              type="text"
              name="answer"
              defaultValue={props.flashcard.answer}
              onChange={handleChange}
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
            Update Flashcard
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UpdateFlashCardModal;
