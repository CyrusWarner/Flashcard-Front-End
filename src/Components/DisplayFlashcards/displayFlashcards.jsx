import React from 'react';
import Flashcard from './../Flashcard/flashcard';
import { useHistory } from "react-router-dom";
import FlashcardsForm from '../FlashcardsForm/flashcardsForm';

const DisplayFlashcards = (props) => {
    const currentCollectionId = props.currentCollection.id
    const history = useHistory();
    const {name, description} = props.currentCollection
    let currentCollectionOfFlashcardsLength = props.currentCollectionOfFlashcards.length
    return(
        <div className="row row-spacer">
            <h1>{name}</h1>
            <p>{description}</p>
            <div>Flashcards: {currentCollectionOfFlashcardsLength}</div>
        <div className="col-md-4">
            <button onClick={() => props.previousFlashcard()}>Previous Flashcard</button>
        </div>
        <div className="col-md-4">
            <Flashcard flashcard={props.flashcard} />
        </div>
        <div className="col-md-4">
            <button onClick={() => props.nextFlashcard()}>Next Flashcard</button>
        </div>
        <FlashcardsForm currentCollectionId={currentCollectionId}/>
    </div>
    )
}

export default DisplayFlashcards;