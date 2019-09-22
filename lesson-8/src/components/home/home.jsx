import React, { Component, Fragment } from 'react';
import ReactDom from 'react-dom';
import './home.css';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { home } = this.props;

    return (
      <Fragment>
        <div className="home text-center">
          <img src={ home.imgSrc } alt={ home.imgAlt } />
          <h1>{ home.title }</h1>
          <p className="text-justify">{ home.body }</p>
        </div>
      </Fragment>
    )
  }
}