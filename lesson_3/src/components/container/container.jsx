import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './container.css';

export default class Container extends Component {
  render() {
    const {children} = this.props;
    return(
      <div>
        {children}
      </div>
    )
  }
}