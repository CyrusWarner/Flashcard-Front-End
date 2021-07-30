import axios from "axios";
import React, { Component } from "react";
import DisplayCollections from "./Components/DisplayCollections/displayCollections";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DisplayFlashcard from "./Components/DisplayFlashcards/displayFlashcards";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allCollections: [],
      currentCollection: [],
      currentCollectionOfFlashcards: [],
      flashcardNumber: 0,
    };
  }

  componentDidMount() {
    this.getAllCollections();
  }

  getAllCollections = async () => {
    let response = await axios.get("http://127.0.0.1:8000/collections/");
    this.setState({
      allCollections: response.data,
    });
  };

  getAllCardsFromCollection = async (collection) => {
    let response = await axios.get(
      `http://127.0.0.1:8000/collections/${collection.id}/`
    );
    if (response.data.length !== 0) {
      this.setState({
        currentCollectionOfFlashcards: response.data,
        currentCollection: collection
      });
    }
  };

  goToNextFlashcard = () => {
    let tempNumber = this.state.flashcardNumber;
    tempNumber++;
    if (tempNumber === this.state.currentCollectionOfFlashcards.length) {
      tempNumber = 0;
    }
    this.setState({
      flashcardNumber: tempNumber,
    });
  };

  goToLastFlashcard = () => {
    let tempNumber = this.state.flashcardNumber;
    tempNumber--;
    if (tempNumber < 0) {
      tempNumber = this.state.currentCollectionOfFlashcards.length - 1;
    }
    this.setState({
      flashcardNumber: tempNumber,
    });
  };

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact>
            <DisplayCollections
              allCollections={this.state.allCollections}
              getAllCardsFromCollection={this.getAllCardsFromCollection}
            />
          </Route>
          {this.state.currentCollectionOfFlashcards.length !== 0 &&
          <Route path="/collection/:id/flashcards">
            <DisplayFlashcard
              previousFlashcard={this.goToLastFlashcard}
              nextFlashcard={this.goToNextFlashcard}
              flashcard={this.state.currentCollectionOfFlashcards[this.state.flashcardNumber]}
              currentCollectionOfFlashcards={this.state.currentCollectionOfFlashcards}
              currentCollection={this.state.currentCollection}
              getAllCardsFromCollection={this.getAllCardsFromCollection}
              flashcardNumber = {this.state.flashcardNumber}
            />
          </Route>
            }
        </Switch>
      </Router>
    );
  }
}

export default App;
