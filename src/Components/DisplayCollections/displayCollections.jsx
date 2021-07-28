import React from 'react';
import { Card, Button, Container, Row } from "react-bootstrap";
import "./displayCollections.css"

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