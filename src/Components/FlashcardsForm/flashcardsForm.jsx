import axios from "axios";
import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";

const FlashcardsForm = (props) => {
  const initialInputState = { question: "", answer: "" };
  const [eachEntry, seteachEntry] = useState(initialInputState);

  const handleSubmit = (event) => {
    event.preventDefault();
    submitFlashcard();
  };
  const submitFlashcard = async () => {
    let currentCollectionId = props.currentCollection.id;
    console.log(currentCollectionId)
    const data = {
      collection: currentCollectionId,
      question: eachEntry.question,
      answer: eachEntry.answer,
    };
    await axios.post("http://127.0.0.1:8000/flashcard/post_flashcard/", data);
    seteachEntry({question: "", answer: ""})
    props.getAllCardsFromCollection(props.currentCollection)
  };
  const handleChange = (event) => {
    seteachEntry({ ...eachEntry, [event.target.name]: event.target.value });
  };
  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <input
        className="form-control mb-2"
        type="text"
        name="question"
        placeholder="Write a question..."
        onChange={handleChange}
        value={eachEntry.question}
      ></input>
      <input
      className="form-control mb-2"
        type="text"
        name="answer"
        placeholder="Write a answer..."
        onChange={handleChange}
        value={eachEntry.answer}
      ></input>
      <Button className="" type="submit">Submit New Flashcard</Button>
    </form>
  );
};

export default FlashcardsForm;
