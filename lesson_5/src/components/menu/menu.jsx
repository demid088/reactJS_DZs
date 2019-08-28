import React, { Component, Fragment } from 'react';
import './menu.css';

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  
  render() {
    const { menu, title, active } = this.props;

    return (
      <Fragment>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container">
            <a class="navbar-brand" href="#">{title}</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav ml-auto">
                {menu.map(
                  (el, index) => {
                    if (active === index) {
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