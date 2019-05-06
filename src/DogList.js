import React, { Component } from 'react'
import './DogList.css'

class DogList extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(evt) {
        console.log("Got here", evt.target.id)
        console.log(evt)
        console.log(evt.target.id)
        console.log(evt.target.name)

    }
  render() {
      const dogs = this.props.dogs
      const dog = dogs.map(dog => {
          return (
              <div className="Dog col-lg-4" key={`${dog.name}-${dog.age}`} name={`${dog.name}-${dog.age}`} onClick={this.handleClick}>
                    <img src={dog.src} className="rounded-circle" />
                    <p>{dog.name}</p>
            </div>
              )
      });
      console.log(this.props.dogs)
    return (
      <div className="DogList">
        <h1 className="display-1 text-center">Click a Dog!</h1>
        <div className="container-fluid">
            <div className="row">
                {dog}
            </div>
        </div>
      </div>
    )
  }
}

export default DogList;
