import React, { useState } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./displayCollections.css";
import CollectionForm from "../CollectionForm/collectionForm";
import { CSSTransition } from "react-transition-group";
const DisplayCollections = (props) => {
  const [search, setSearch] = useState("");
  const filterCollections = props.allCollections.filter((collection) =>
    collection.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <React.Fragment>
      <Container fluid className="video-container">
        <h1 className="home-title">Collections</h1>
        <CollectionForm getAllCollections={props.getAllCollections} />
        <Container>
          <Row>
            <Col></Col>
            <Col>
              <input
                className="form-control"
                placeholder="search..."
                onChange={(event) => setSearch(event.target.value)}
              ></input>
            </Col>
            <Col></Col>
          </Row>
        </Container>
        <Row className="d-flex justify-content-center">
          {filterCollections.map((collection) => {
            let collectionName =
              collection.name.charAt(0).toUpperCase() +
              collection.name.slice(1);
            return (
              <React.Fragment>
                <CSSTransition
                  in={true}
                  appear={true}
                  timeout={1000}
                  classNames="fade"
                >
                  <Card
                    className="card-container border border-primary border-3"
                    style={{ width: "18rem", margin: "1rem" }}
                  >
                    <Card.Body>
                      <Card.Title>{collectionName}</Card.Title>
                      <Card.Text>{collection.description}</Card.Text>
                      <Link to={`/collection/${collection.id}/flashcards`}>
                        <Button
                          className="p-3"
                          onClick={() => {
                            props.getAllCardsFromCollection(collection);
                          }}
                        >
                          See Flashcards
                        </Button>
                      </Link>
                    </Card.Body>
                  </Card>
                </CSSTransition>
              </React.Fragment>
            );
          })}
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default DisplayCollections;
