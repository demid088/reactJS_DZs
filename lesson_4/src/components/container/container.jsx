import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './container.css';

export default class Container extends Component {
  render() {
    const { children } = this.props;
    const { width } = this.props;
    return (
      <div class="container">
        <div className="row">
          {children.map(
            (el, index) => {
              let colW = width === undefined ? "col-0" : "col-" + width[index];
              return (
                <div className={colW}>
                  {el}
                </div>
              )
            }
          )}
        </div>
      </div>
    )
  }
}