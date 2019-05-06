import React, { Component } from 'react'
import {Switch, Route, Redirect} from 'react-router-dom';
import DogList from './DogList';
import DogDetails from './DogDetails'

export default class Routes extends Component {
  render() {
        //gets all the props and extracts the desired dog, which is returned inside the Dog component
        const getDog = props => {
        let name = props.match.params.name
        let currentDog = this.props.dogs.find(
          dog => dog.name.toLowerCase() === name.toLowerCase()
          );
        console.log(currentDog);
        if (currentDog) {
            return <DogDetails {...props} dog={currentDog} />
        } else {
            return <Redirect to="/dogs" />
        }
      }
  
    return (
        <Switch>
            <Route exact path="/dogs" render={() => <DogList dogs={this.props.dogs} />} /> 
            <Route exact path="/dogs/:name" render={getDog} /> 
            <Redirect to="/dogs" />
        </Switch>


    )
  }
}
