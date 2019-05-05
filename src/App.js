import React, { Component } from 'react';
import NavBar from './NavBar'
import DogList from './DogList'
import DogDetails from './DogDetails'
import './App.css';
import {Switch, Route} from 'react-router-dom';

import whiskey from "./images/whiskey.jpg"
import hazel from "./images/hazel.jpg";
import tubby from "./images/tubby.jpg";



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
          "Hazel loves people more than dogs.",
          "Hazel loves licking Nicole.",
          "Hazel loves biting Igor."
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
    //gets all the props and extracts the desired dog, which is returned inside the Dog component
    const getDog = props => {
      let name = props.match.params.name
      let currentDog = this.props.dogs.find(
        dog => dog.name.toLowerCase() === name.toLowerCase()
        );
      console.log(currentDog);
      return <DogDetails {...props} dog={currentDog} />
    }

  return (
    <div>
    <Switch>
        <Route exact path="/dogs" render={() => <DogList dogs={this.props.dogs} />} /> 
        <Route exact path="/dogs/:name" render={getDog} /> 
      </Switch>

    </div>
  );
  }
}

export default App;

