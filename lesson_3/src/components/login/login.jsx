import React, { Component, Fragment } from 'react';
import ReactDom from 'react-dom';
import './login.css';
import Modal from '../modal'

export default class Login extends Component {
  render() {
    const { title, type } = this.props; // props = object
    return (
      <Fragment>
        <button id="login_btn" className="btn btn-primary" data-toggle="modal" data-target="#login_modal" type={type}>
          {title}
        </button>
        <Modal></Modal>
      </Fragment>
    );
  }
}