import './users.css';
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  //methods

  render() {
    const { users } = this.props;

    return (
      <Fragment>
        <div className="users">
          {users.map(
            ({ id, name, username }, idx) =>
              <div key={idx}>
                <hr />
                <Link to={`/users/${id}`}>
                  <h5>{username}</h5>
                </Link>
                <p>{name}</p>
              </div>
          )}
        </div>
      </Fragment>
    )
  }
}