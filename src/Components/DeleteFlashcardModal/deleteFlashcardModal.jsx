import { Modal, Button, Form } from "react-bootstrap";
import React, { useState } from "react";

const DeleteFlashcardModal = (props) => {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
  return (
    <>
      <Button className="btn btn-danger" onClick={handleShow}>
        Delete Flashcard
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
          <Form.Group>
            <h5 className="text-center">
              Are you sure you would like to delete this flashcard?
            </h5>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            No
          </Button>
          <Button
            variant="btn btn-danger"
            type="submit"
            onClick={() => [
              handleClose(),
              props.deleteFlashcard(props.currentFlashcard),
            ]}
          >
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteFlashcardModal;
