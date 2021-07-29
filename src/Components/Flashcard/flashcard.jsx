import React from 'react'
import UpdateFlashCardModal from '../UpdateFlashCardModal/updateFlashCardModal';

const Flashcard = (props) => {
    const {getAllCardsFromCollection, currentCollection} = props
    return (
        <div>
            <div>
                <h1>{props.flashcard.question}</h1>
                {/*<h4>{props.flashcard.answer}</h4>*/}
                <UpdateFlashCardModal flashcard={props.flashcard} getAllCardsFromCollection={getAllCardsFromCollection} currentCollection={currentCollection}/>
            </div>
        </div>
    );
}
export default Flashcard;