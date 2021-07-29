import axios from "axios";
import React, { Component } from "react";
import DisplayCollections from "./Components/DisplayCollections/displayCollections";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DisplayFlashcard from "./Components/DisplayFlashcards/displayFlashcards";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allCollections: [],
      currentCollection: [],
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
    console.log(this.state.allCollections);
  };

  getAllCardsFromCollection = async (collectionId) => {
    let response = await axios.get(
      `http://127.0.0.1:8000/collections/${collectionId}/`
    );
    if (response.data.length !== 0) {
      this.setState({
        currentCollection: response,
      });
      console.log(response.data);
    }
  };

  goToNextFlashcard = () => {
    let tempNumber = this.state.flashcardNumber;
    tempNumber++;
    if (tempNumber === this.state.currentCollection.length) {
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
      tempNumber = this.state.currentCollection.length - 1;
    }
    this.setState({
      flashcardNumber: tempNumber,
    });
  };

  render() {
    console.log(this.state.currentCollection)
    return (
      <Router>
        <Switch>
          <Route path="/" exact>
            <DisplayCollections
              allCollections={this.state.allCollections}
              getAllCardsFromCollection={this.getAllCardsFromCollection}
            />
          </Route>
          <Route path="/collection/:id/flashcards">
            <DisplayFlashcard
              previousFlashcard={this.goToLastFlashcard}
              nextFlashcard={this.goToNextFlashcard}
              flashcard={this.state.currentCollection[this.state.flashcardNumber]}
            />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
