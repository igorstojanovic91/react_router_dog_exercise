import React, { Component } from 'react';
import whiskey from "./images/whiskey.jpg"
import hazel from "./images/hazel.jpg";
import tubby from "./images/tubby.jpg";
import './App.css';
import {Switch, Route} from 'react-router-dom';
import NavBar from './NavBar'
import DogList from './DogList'
import Dog from './Dog'

class App extends Component {
  static defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Hazel",
        age: 3,
        src: hazel,
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: tubby,
        facts: [
          "Tubby is not the brightest dog",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food."
        ]
      }
    ]
  } 

  render() {

  return (
    <div className="App">
        <Route path="/dogs" render={() => <h1 className="display-1"> Dog List</h1>} /> 
    </div>
  );
  }
}

export default App;

