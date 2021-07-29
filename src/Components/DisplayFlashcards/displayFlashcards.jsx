import React from 'react';
import Flashcard from './../Flashcard/flashcard';
import { useHistory } from "react-router-dom";
import FlashcardsForm from '../FlashcardsForm/flashcardsForm';

const DisplayFlashcards = (props) => {
    const currentCollection = props.currentCollection
    const getAllCardsFromCollection = props.getAllCardsFromCollection
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
            <Flashcard flashcard={props.flashcard} getAllCardsFromCollection={getAllCardsFromCollection} currentCollection={currentCollection} />
        </div>
        <div className="col-md-4">
            <button onClick={() => props.nextFlashcard()}>Next Flashcard</button>
        </div>
        <FlashcardsForm currentCollection={currentCollection} getAllCardsFromCollection={getAllCardsFromCollection}/>
    </div>
    )
}

export default DisplayFlashcards;