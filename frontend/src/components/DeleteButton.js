import React, { Component } from 'react'

class DeleteButton extends Component {
  render() {
    return (
      <button onClick={ (e) => this.props.deleteItem(this.props.item) } 
        className="deleteButton">
          Delete
      </button>
    );
  }
}

export default DeleteButton;
