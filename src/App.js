import axios from "axios";
import React, { Component } from 'react';
import DisplayCollections from "./Components/DisplayCollections/displayCollections";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      allCollections: [],
      currentCollection: [],
    }
  }

  componentDidMount() {
    this.getAllCollections()
  }

  getAllCollections = async() => {
    let response = await axios.get('http://127.0.0.1:8000/collections/')
    this.setState({
      allCollections: response.data
    })
    console.log(this.state.allCollections)
  }

  getAllCardsFromCollection = async(collectionId) => {
    let response = await axios.get(`http://127.0.0.1:8000/collections/${collectionId}/`) 
    if (response.data.length !== 0){
      this.setState({
        currentCollection: response
      })
      console.log(response.data)
    }
  }
  render() { 
    return (
      <React.Fragment>
        <h1>Hello World</h1>
        <DisplayCollections allCollections={this.state.allCollections} getAllCardsFromCollection={this.getAllCardsFromCollection}/>
      </React.Fragment>
    );
  }
}
 
export default App;