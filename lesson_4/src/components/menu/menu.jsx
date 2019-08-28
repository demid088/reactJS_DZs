import React, { Component, Fragment } from 'react';
import ReactDom from 'react-dom';
import './menu.css';

export default class Menu extends Component {
  render() {
    const { items_prop, title } = this.props; // props = object
    return (
      // <Fragment>
      //   <h1> {title} </h1>
      //   <ul className="menu">
      //     {items_prop.map(el => <li> <a href={el.href}> {el.title} </a> </li>)}
      //   </ul>
      // </Fragment>
      <Fragment>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container">
            <a class="navbar-brand" href="#">{title}</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav ml-auto">
                {items_prop.map(
                  el => {
                    if (document.location.pathname === el.href) {
                      return (
                        <li class="nav-item active">
                          <a class="nav-link" href={el.href}> {el.title} </a>
                        </li>
                      )
                    } else {
                      return (
                        <li class="nav-item">
                          <a class="nav-link" href={el.href}> {el.title} </a>
                        </li>
                      )
                    }
                  }
                )}
              </ul>
            </div>
          </div>
        </nav>
      </Fragment>
    );
  }
}