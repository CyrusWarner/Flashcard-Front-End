import React from 'react';
import Flashcard from './../Flashcard/flashcard';

const DisplayFlashcards = (props) => {
    console.log(props.flashcard)
    return(
        <div className="row row-spacer">
        <div className="col-md-4">
            <button onClick={() => props.previousFlashcard()}>Previous Flashcard</button>
        </div>
        <div className="col-md-4">
            <Flashcard flashcard={props.flashcard} />
        </div>
        <div className="col-md-4">
            <button onClick={() => props.nextFlashcard()}>Next Flashcard</button>
        </div>
    </div>
    )
}

export default DisplayFlashcards;