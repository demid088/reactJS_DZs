import './comment.css';
import React, { Component, Fragment } from 'react';

export default class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  //methods

  render() {
    const { comment } = this.props;
    
    return (
      <Fragment>
        <ul className="comment">
          <hr />
          <span className="font-italic">Name:</span>
          <h5>{comment.name}</h5>

          <span className="font-italic">Comment:</span>
          <p>{comment.body}</p>
        </ul>
      </Fragment>
    )

  }
}