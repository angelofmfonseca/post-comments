import React, { Component } from 'react'

class Sorter extends Component {
  render() {
    const { options, sortPosts, sort } = this.props
    return (
      <ul className="buttonsOrder">
        { options.map((option) =>
          <li> 
            <button key={ option.value } 
            className={ "mainButtons " + (option.value === sort ? 'active' : '') }
            onClick={ () => (sortPosts(option.value)) } > { option.text }
            </button>
          </li>
        ) }
      </ul>
    );
  }
}
export default Sorter;
