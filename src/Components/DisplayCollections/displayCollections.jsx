import React from 'react';
import { Card, Button, Container, Row } from "react-bootstrap";
import {Link} from 'react-router-dom'
import "./displayCollections.css"
// COME BACK AND STYLE THE CARDS!!
const DisplayCollections = (props) => {
    return (
        <Container fluid className='video-container'>
  <Row className="justify-content-center">
    {props.allCollections.map((collection) => {
      return (
          <React.Fragment>
              <Card className="card-container" style={{ width: "18rem" }}> 
            <Card.Body>
                <Card.Title>{collection.name}</Card.Title>
              <Card.Text>{collection.description}</Card.Text>
              <Link to={`/collection/${collection.id}/flashcards`}>
              <Button onClick={() =>{
                  props.getAllCardsFromCollection(collection.id)
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