import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import './App.css';

class Nav extends Component {
  render() {
    const { store } = this.props;
    return (
      <nav className="topics">
        <ul className="topicsDetails">
          <li className="eachTopic">
            <Link to="/">Home</Link>
          </li>
        { store.categories.map((category) =>
          <li className="eachTopic" key={ category.name }>
              <Link to={`/${ category.path }`}>{ category.name }</Link>
          </li>
        ) }
        </ul>
      </nav>
    );
  }
}
function mapStateToProps(store) {
  const catKeys = Object.keys(store.categories);
  return {
    store: {
      categories: catKeys.map((key) => ({
        name: store.categories[key].name,
        path: store.categories[key].path
      }))
    }
  }
}
export default connect(mapStateToProps)(Nav);
