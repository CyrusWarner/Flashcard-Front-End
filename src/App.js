import axios from "axios";
import React, { Component } from 'react';
import DisplayCollection from "./Components/DisplayCollections/displayCollections";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      allCollections: [],

    }
  }

  componentDidMount() {
    this.getAllCollections()
  }

  getAllCollections = async() => {
    let response = await axios.get('http://127.0.0.1:8000/collections/')
    this.setState({
      allCollectons: response.data
    })
    console.log(response.data)
  }
  render() { 
    return (
      <React.Fragment>
        <h1>Hello World</h1>
        <DisplayCollection allCollections={this.state.allCollections}/>
      </React.Fragment>
    );
  }
}
 
export default App;