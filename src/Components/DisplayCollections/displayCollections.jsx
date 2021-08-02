import React from 'react';
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import {Link} from 'react-router-dom'
import "./displayCollections.css"
import CollectionForm from '../CollectionForm/collectionForm';
import {CSSTransition} from 'react-transition-group'
const DisplayCollections = (props) => {
    return (
        <Container fluid className='video-container'>
          <h1 className="home-title">Collections</h1>
          <CollectionForm getAllCollections={props.getAllCollections}/>
  <Row className="d-flex justify-content-center">
    {props.allCollections.map((collection) => {
      let collectionName = collection.name.charAt(0).toUpperCase() + collection.name.slice(1)
      return (
          <React.Fragment>
            <CSSTransition
            in={true}
            appear={true}
            timeout={1000}
            classNames="fade"
            >
              <Card className="d-flex card-container border border-primary border-3" style={{ width: "18rem", margin: "1rem" }}> 
            <Card.Body>
                <Card.Title>{collectionName}</Card.Title>
              <Card.Text>{collection.description}</Card.Text>
              <Link to={`/collection/${collection.id}/flashcards`}>
              <Button className="p-3" onClick={() =>{
                  props.getAllCardsFromCollection(collection)
              }} >See Flashcards</Button>
              </Link>
            </Card.Body>
          </Card>
          </CSSTransition>
          </React.Fragment>
      );
    })}
  </Row>
  </Container>
  );
  };
 
export default DisplayCollections;