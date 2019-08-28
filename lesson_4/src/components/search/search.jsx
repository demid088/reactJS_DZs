import React, { Component, Fragment } from 'react';
import ReactDom from 'react-dom';
import './search.css';

export default class Search extends Component {
  render() {
    //const { title, type } = this.props; // props = object
    return (
      <Fragment>
        <div class="card my-4">
          <h5 class="card-header">Search</h5>
          <div class="card-body">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Search for..." />
              <span class="input-group-btn">
                <button class="btn btn-secondary" type="button">Go!</button>
              </span>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}