import React, { useState } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./displayCollections.css";
import CollectionForm from "../CollectionForm/collectionForm";
import { CSSTransition } from "react-transition-group";
import { motion } from "framer-motion";
const DisplayCollections = (props) => {
  const sentence = {
    hidden: {opacity: 1},
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  }
  const letter = {
    hidden: {opacity: 0, y: 50},
    visible: {
      opacity: 1,
      y:0,
    },
  }
  const [search, setSearch] = useState("");
  const name = "Collections"
  const filterCollections = props.allCollections.filter((collection) =>
    collection.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <React.Fragment>
      <Container fluid className="video-container">
        <motion.h1
        variants={sentence}
        initial="hidden"
        animate="visible"
        className="home-title"
        >
            {name.split("").map((char, index) => {
              return (
                <motion.span key={char + "-" + index} variants={letter}>{char}</motion.span>
              )
            })}
          
        </motion.h1>
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
