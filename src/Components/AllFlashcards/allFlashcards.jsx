import { Card, Container, Row } from "react-bootstrap";
import React from 'react';
import { AnimatePresence, motion } from "framer-motion";

const AllFlashcards = (props) => {
    return (
        
        <Container fluid>
            <Row className="d-flex" >
        {props.currentCollectionOfFlashcards.map((flashcard, index) => {
            return(
                
                    <div>
                    <AnimatePresence>
                    <motion.div className="d-flex justify-content-center"
                    variants={{
                        hidden: {
                            opacity: 0

                        },
                        visible: (index) => ({
                            opacity: 1,
                            transition: {
                                delay: index * 0.1,
                            },
                        }),
                            
                    }}
                    initial="hidden"
                    custom={index}
                    animate="visible"
                    key={flashcard.id}
                    >
        
                <React.Fragment>
                    <Card className=" border border-primary border-3" style={{ width: "18rem", margin: "1rem" }}> 
                  <Card.Body>
                      <Card.Title>Question: {flashcard.question}</Card.Title>
                    <Card.Text>Answer: {flashcard.answer}</Card.Text>
                  </Card.Body>
                </Card>
                </React.Fragment>
        </motion.div>
        </AnimatePresence></div>
            )
        })}
        </Row>
        </Container>
    )
}

export default AllFlashcards