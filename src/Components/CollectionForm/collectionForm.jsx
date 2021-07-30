import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const CollectionForm = (props) => {
  const initialInputState = { name: "", description: "" };
  const [eachEntry, setEachEntry] = useState(initialInputState);
  const handleChange = (event) => {
    setEachEntry({ ...eachEntry, [event.target.name]: event.target.value });
  };
  useEffect(() => {
      
  },[]);
  const handleSubmit = (event) => {
    event.preventDefault();
    postCollection();
  };

  const postCollection = async () => {
    await axios.post(`http://127.0.0.1:8000/collections/`, eachEntry);
    setEachEntry({name: "", description: ""})
    props.getAllCollections()


  };
  return (
    <Container className="g-0" style={{ marginLeft: "0px" }}>
      <Row>
        <Col>
          <form onSubmit={handleSubmit}>
            <input
              onChange={handleChange}
              className="form-control mb-2"
              placeholder="New collection name..."
              name="name"
              type="text"
              value={eachEntry.name}
            ></input>
            <textarea
              onChange={handleChange}
              className="form-control mb-2"
              placeholder="New collection description..."
              name="description"
              value={eachEntry.description}
            ></textarea>
            <Button type="submit">Create New Collection</Button>
          </form>
        </Col>
        <Col></Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default CollectionForm;
