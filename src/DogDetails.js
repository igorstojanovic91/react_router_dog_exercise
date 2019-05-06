import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import './DogDetails.css'

 class DogDetails extends Component {

  render() {

      const img = this.props.dog.src
      const name = this.props.dog.name
      const age = this.props.dog.age
      const facts = this.props.dog.facts.map(fact => {
        return (
          <li className="list-group-item">{fact}</li>
        )
      })
    


    return (
      <div className="container">
      <div className="DogDetail row justify-content-center mt-5">
        <div className="card col-11 col-lg-5 px-0">
            <img className="card-img-top" src={img} alt={name} />
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">{age} years old</p>
            </div>
            <ul className="list-group list-group-flush">
                {facts}
            </ul>
            <div className="card-body">
              <Link to="/dogs" className="btn btn-info">Back </Link>
            </div>
      </div>
    </div>
    </div>
    )
  }
}

export default DogDetails;

