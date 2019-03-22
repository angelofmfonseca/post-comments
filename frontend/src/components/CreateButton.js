import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class CreateButton extends Component {
  render() {
    return (
      <Link to="/create">
        <ul className="buttonsOrder">
          <li>
            <button className="mainButtons">Create a Post</button>
          </li>
        </ul>
      </Link>
    );
  }
}
export default CreateButton;
