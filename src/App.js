import axios from "axios";
import React, { Component } from "react";
import DisplayCollections from "./Components/DisplayCollections/displayCollections";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DisplayFlashcard from "./Components/DisplayFlashcards/displayFlashcards";
import AllFlashcards from "./Components/AllFlashcards/allFlashcards";
import { AnimatePresence } from "framer-motion";
import NavigationBar from "./Components/Navbar/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
//This is the only component that does not use the react hooks as we received an older document on accident that didnt include the must use react hooks line. All other components are using react hooks.
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allCollections: [],
      currentCollection: [],
      currentCollectionOfFlashcards: [],
      flashcardNumber: 0,
      loading: true
    };
  }

  componentDidMount() {
    const data = window.localStorage.getItem('saved-currentCollection')
    const savedData = JSON.parse(data) 
    console.log(savedData)
    if(savedData !== null){
    this.setState({
      loading: false,
      currentCollection: savedData.currentCollection,
      currentCollectionOfFlashcards: savedData.currentCollectionOfFlashcards
    })
  }
  if (savedData === null) {
    this.setState({
      loading: false
    });
  }
      
    this.getAllCollections();
  }

  componentDidUpdate() {
    let currentCollection = this.state.currentCollection
    let currentCollectionOfFlashcards = this.state.currentCollectionOfFlashcards
    const valuesToSave = {currentCollection, currentCollectionOfFlashcards}
    window.localStorage.setItem('saved-currentCollection', JSON.stringify(valuesToSave))
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
      this.setState({
        currentCollectionOfFlashcards: response.data,
        currentCollection: collection
      });
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
  deleteFlashcard = async (flashcardId) => {
    await axios.delete(`http://127.0.0.1:8000/flashcard_delete/${flashcardId}/`)
    this.getAllCardsFromCollection(this.state.currentCollection)
  }
  render() {
    if (this.state.loading) return null;
    else{
    return (
      <div
      style={{overflowX: "hidden"}}>
      <Router>
        <NavigationBar allCollections={this.state.allCollections} searchCollection={this.searchCollection}/>
        <AnimatePresence exitBeforeEnter>
        <Switch >
          <Route path="/" exact>
            <DisplayCollections
              allCollections={this.state.allCollections}
              getAllCardsFromCollection={this.getAllCardsFromCollection}
              getAllCollections={this.getAllCollections}
            />
          </Route>
          <Route path="/collection/:id/flashcards" >
            <DisplayFlashcard
              deleteFlashcard={this.deleteFlashcard}
              previousFlashcard={this.goToLastFlashcard}
              nextFlashcard={this.goToNextFlashcard}
              flashcard={this.state.currentCollectionOfFlashcards[this.state.flashcardNumber]}
              currentCollectionOfFlashcards={this.state.currentCollectionOfFlashcards}
              currentCollection={this.state.currentCollection}
              getAllCardsFromCollection={this.getAllCardsFromCollection}
              flashcardNumber = {this.state.flashcardNumber}
            />
            <Route path="/collection/1/allFlashcards" >
              <AllFlashcards
              currentCollectionOfFlashcards = {this.state.currentCollectionOfFlashcards}
               />
            </Route>
          </Route>
        </Switch>
        </AnimatePresence>
      </Router>
      </div>
    );
  }
}
}

export default App;
