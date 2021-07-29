import React from 'react'

Flashcard = (props) => {
    return (
        <div>
            <div>
                <h1>{props.flashcard.question}</h1>
                <h4>{}</h4>
            </div>
        </div>
    );
}
export default Flashcard;