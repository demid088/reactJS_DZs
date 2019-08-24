import React, { Component, Fragment } from 'react';
import ReactDom from 'react-dom';
import './modal.css';

export default class Modal extends Component {
  render() {
    //const { title, type } = this.props; // props = object
    return (
      <Fragment>
        <div id="login_modal" className="modal hide fade modal-dialog modal-content">
          <div className="modal-header">
            <h3>Авторизация</h3>
            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
              &times;
            </button>
          </div>
          <div className="modal-body">
            <div className="form-group row">
              <label htmlFor="email_address" className="col-md-4 col-form-label text-md-right">
                E-Mail Address
              </label>
              <div className="col-md-6">
                <input type="text" id="email_address" className="form-control" name="email-address" required autoFocus></input>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="password" className="col-md-4 col-form-label text-md-right">
                Password
              </label>
              <div className="col-md-6">
                <input type="password" id="password" className="form-control" name="password" required></input>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">
              Закрыть
            </button>
            <button type="button" className="btn btn-primary">
              Войти
            </button>
          </div>
        </div>
      </Fragment>
    );
  }
}