import React from 'react';
import { Card, Button, Container, Row } from "react-bootstrap";
import {Link} from 'react-router-dom'
import "./displayCollections.css"
// COME BACK AND STYLE THE CARDS!!
const DisplayCollections = (props) => {

    return (
        <Container fluid className='video-container'>
          <h1 className="home-title">Collections</h1>
  <Row className="justify-content-center">
    {props.allCollections.map((collection) => {
      let collectionName = collection.name.charAt(0).toUpperCase() + collection.name.slice(1)
      return (
          <React.Fragment>
              <Card className="card-container border border-primary border-3" style={{ width: "18rem", margin: "1rem" }}> 
            <Card.Body>
                <Card.Title>{collectionName}</Card.Title>
              <Card.Text>{collection.description}</Card.Text>
              <Link to={`/collection/${collection.id}/flashcards`}>
              <Button onClick={() =>{
                  props.getAllCardsFromCollection(collection)
              }} >See Flashcards</Button>
              </Link>
            </Card.Body>
          </Card>
          </React.Fragment>
      );
    })}
  </Row>
  </Container>
  );
  };
 
export default DisplayCollections;