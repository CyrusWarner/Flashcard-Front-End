import React from 'react';
import Flashcard from './../Flashcard/flashcard';

const DisplayFlashcards = (props) => {
    return(
        <div className="row row-spacer">
        <div className="col-md-4">
            <button onClick={() => props.previousBook()}>Previous Book</button>
        </div>
        <div className="col-md-4">
            <Flashcard flashcard={props.flashcard} />
        </div>
        <div className="col-md-4">
            <button onClick={() => props.nextBook()}>Next Book</button>
        </div>
    </div>
    )
}

export default DisplayFlashcards;