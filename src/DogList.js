import React, { Component } from 'react'
import './DogList.css'

class DogList extends Component {
  render() {
      const dog = this.props.dogs.map(dog => {
          return (
              <div className="Dog col-lg-4">
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
