import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container, Button, Modal, Form } from "react-bootstrap";

const CollectionForm = (props) => {
  const initialInputState = { name: "", description: "" };
  const [eachEntry, setEachEntry] = useState(initialInputState);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChange = (event) => {
    setEachEntry({ ...eachEntry, [event.target.name]: event.target.value });
  };
  useEffect(() => {}, []);
  const handleSubmit = (event) => {
    event.preventDefault();
    postCollection();
  };

  const postCollection = async () => {
    await axios.post(`http://127.0.0.1:8000/collections/`, eachEntry);
    setEachEntry({ name: "", description: "" });
    props.getAllCollections();
  };
  return (
    <Container className="g-0" style={{ marginLeft: "0px" }}>
 <>
<Button variant="primary" onClick={handleShow}>
  Create New Collection
</Button>
<Modal
  show={show}
  onHide={handleClose}
  backdrop="static"
  keyboard={false}
>
  <Modal.Header closeButton>
    <Modal.Title>New Collection</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <Form.Group>
      <label>Name:</label>
      <Form.Control
              onChange={handleChange}
              className="form-control mb-2"
              placeholder="New collection name..."
              name="name"
              type="text"
              value={eachEntry.name}
      ></Form.Control>
      <label>Description:</label>
      <textarea
              onChange={handleChange}
              className="form-control mb-2"
              placeholder="New collection description..."
              name="description"
              value={eachEntry.description}
      ></textarea>
    </Form.Group>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>
      Close
    </Button>
    <Button
      variant="primary"
      type="submit"
      onClick={(event) => [handleClose(), handleSubmit(event)]}
    >
      Create Collection
    </Button>
  </Modal.Footer>
</Modal>
</> 
    </Container>
  );
};

export default CollectionForm;


