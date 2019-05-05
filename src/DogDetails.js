import React, { Component } from 'react'
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
      <div classNameName="DogDetail">
        <div className="card">
            <img className="card-img-top" src={img} alt={name} />
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">{age} years old</p>
            </div>
            <ul className="list-group list-group-flush">
                {facts}
            </ul>
            <div className="card-body">
              <a href="#" className="card-link">Back</a>
            </div>
      </div>
    </div>
    )
  }
}

export default DogDetails;

