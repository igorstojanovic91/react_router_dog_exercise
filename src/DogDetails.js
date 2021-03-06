import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './DogDetails.css'

 class DogDetails extends Component {

  render() {

      const img = this.props.dog.src
      const name = this.props.dog.name
      const age = this.props.dog.age
      const facts = this.props.dog.facts.map((fact, i) => {
        return (
          <li className="list-group-item" key={`${fact}-${i}`}>{fact}</li>
        )
      })
    


    return (
      <div className="DogDetail row justify-content-center my-5">
        <div className="DogDetail-card card col-11 col-lg-5 px-0">
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
    )
  }
}

export default DogDetails;

