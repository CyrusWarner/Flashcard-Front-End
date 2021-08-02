import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./displayCollections.css";
import CollectionForm from "../CollectionForm/collectionForm";
import { AnimatePresence, motion } from "framer-motion";
const DisplayCollections = (props) => {
  return (
    <Container fluid className="video-container">
      <h1 className="home-title">Collections</h1>
      <CollectionForm getAllCollections={props.getAllCollections} />
      <Row className="d-flex justify-content-center">
        {props.allCollections.map((collection, index) => {
          let collectionName =
            collection.name.charAt(0).toUpperCase() + collection.name.slice(1);
          return (
            // <AnimatePresence>
            //   <motion.div
            //     variants={{
            //       hidden: {
            //         opacity: 0,
            //       },
            //       visible: (index) => ({
            //         opacity: 1,
            //         transition: {
            //           delay: index *0.1
            //         },
            //       }),
            //     }}
            //     initial="hidden"
            //     custom={index}
            //     animate="visible"
            //     key={collection.id}
            //   >
                <React.Fragment>
                  <Card
                    className="d-flex card-container border border-primary border-3"
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
                </React.Fragment>
            //   </motion.div>
            // </AnimatePresence>
          );
        })}
      </Row>
    </Container>
  );
};

export default DisplayCollections;
