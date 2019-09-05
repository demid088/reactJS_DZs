import React, { Component, Fragment } from 'react';
import ReactDom from 'react-dom';
import './content.css';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { contents } = this.props;

    return (
      <Fragment>
        <div className="content">
          {
            contents.map(({ id, title, body }, idx) =>
              <div className="col">
                <h1 className="mt-4">{ title }</h1>
                <hr></hr>
                <p>Posted on January 1, 2019 at 12:00 PM</p>
                <hr></hr>
                <img className="img-fluid rounded" src="http://placehold.it/900x300" alt=""></img>
                <hr></hr>
                <p className="body">{ body }</p>
                <hr></hr>
              </div>
            )
          }
        </div>
      </Fragment>
    )
  }
}