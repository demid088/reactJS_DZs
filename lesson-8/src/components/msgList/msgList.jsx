import './msgList.css';
import React, { Component, Fragment } from 'react';

export default class msgList extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  //methods

  render() {
    const { messages } = this.props;

    return(
      <Fragment>
        <div className="msgList">
          <ul>
            {messages.map ((el) =>
              <li key={el._id}>
                <h5>{el.author}</h5>
                <p>{el.text}</p>
                <h6>{el.timeStamp}</h6>
              </li>
              )}
          </ul>
        </div>
      </Fragment>
    )
  }
}