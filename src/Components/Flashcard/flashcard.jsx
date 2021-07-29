import React from 'react'
import UpdateFlashCardModal from '../UpdateFlashCardModal/updateFlashCardModal';
import ReactCardFlip from 'react-card-flip';
import { useState } from 'react';
import FrontOfCard from '../FrontOfCard/frontOfCard';
import BackOfCard from '../BackOfCard/backOfCard';

const Flashcard = (props) => {
    const [isFlipped, setIsFlipped] = useState(false)
    const {getAllCardsFromCollection, currentCollection} = props

const handleClick = (event) => {
        event.preventDefault();
        setIsFlipped(prevState => ({ isFlipped: !prevState.isFlipped }));
    }
    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <FrontOfCard flashcard={props.flashcard}>
        <h1>{props.flashcard.question}</h1>
        <UpdateFlashCardModal flashcard={props.flashcard} getAllCardsFromCollection={getAllCardsFromCollection} currentCollection={currentCollection}/>
          <button onClick={() => handleClick}>Click to flip</button>
        </FrontOfCard>

        <BackOfCard flashcard={props.flashcard}>
          <h4>{props.flashcard.answer}</h4>
          <button onClick={() => handleClick}>Click to flip</button>
        </BackOfCard>
      </ReactCardFlip>
    );
}
export default Flashcard;