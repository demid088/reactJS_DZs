import './commentsList.css';
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

export default class CommentsList extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  //methods

  render() {
    const { comments } = this.props;

    return (
      <Fragment>
        <div className="commentsList">
          {comments.map(
            ({ id, name, body }, idx) =>
              <div key={idx}>
                <hr />
                <Link to={`/comments/${id}`}>
                  <h5>{name}</h5>
                </Link>
                <p>{body}</p>
              </div>
          )}
        </div>
      </Fragment>
    )
  }
}