import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

const FlashcardsForm = (props) => {
    const initialInputState = {question: "", answer: ""}
    const[eachEntry, seteachEntry] = useState(initialInputState)
    const handleSubmit = (event) => {
        event.preventDefault()
        submitFlashcard()
    };
    const submitFlashcard = async () => {
        let currentCollectionId = props.currentCollectionId
        const data = {
            collection: currentCollectionId,
            question: eachEntry.question,
            answer: eachEntry.answer
        }
        await axios.post('http://127.0.0.1:8000/flashcard/post_flashcard/', data)
    }
    const handleChange = (event) => {
        seteachEntry({...eachEntry, [event.target.name]: event.target.value})
    }
  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <input
        type="text"
        name="question"
        placeholder="Write a question..."
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="answer"
        placeholder="Write a answer..."
        onChange={handleChange}
      ></input>
      <button type="submit">Submit Flashcard</button>
    </form>
  );
};

export default FlashcardsForm



