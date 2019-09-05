import './user.css';
import React, { Component, Fragment } from 'react';

export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  //methods

  render() {
    if (
      typeof this.props.user.address === 'undefined' ||
      typeof this.props.user.company === 'undefined'
    ) {
      return ('');
    }
    const { user } = this.props;
    const { address } = this.props.user;
    const { company } = this.props.user;

    return (
      <Fragment>
        <ul className="user">
          <hr />
          <span className="font-italic">Login:</span>
          <h5>{user.username}</h5>

          <span className="font-italic">Полное имя:</span>
          <h5>{user.name}</h5>

          <span className="font-italic">Город:</span>
          <h5>{address.city}</h5>

          <span className="font-italic">Компания:</span>
          <h5>{company.name}</h5>
        </ul>
      </Fragment>
    )

  }
}