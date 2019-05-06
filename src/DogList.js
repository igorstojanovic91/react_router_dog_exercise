import React, { Component } from 'react'
import './DogList.css'
import { Link } from 'react-router-dom';

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
              
                <div className="Dog col-lg-4 text-center" key={`${dog.name}-${dog.age}`} name={`${dog.name}-${dog.age}`} onClick={this.handleClick}>
                <Link to={`/dogs/${dog.name}`}> 
                    <img src={dog.src} className="rounded-circle" />
                    <h3 className="underline">{dog.name}</h3>
                </Link>
                </div>
            
            )
      });
      console.log(this.props.dogs)
    return (
      <div className="DogList">
        <h1 className="display-1 text-center my-5">Click a Dog!</h1>
       
            <div className="row">
                {dog}
            </div>
        </div>

    )
  }
}

export default DogList;
