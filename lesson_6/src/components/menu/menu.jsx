import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
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
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <a className="navbar-brand" href="/">{ title }</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                {menu.map(
                  (el) => {
                    if (active === el.id) {
                      return (
                        <li className="nav-item active">
                          <Link id={el.id} className="nav-link" to={el.href}>
                            {el.title}
                          </Link>
                        </li>
                      )
                    } else {
                      return (
                        <li className="nav-item">
                          <Link id={el.id} className="nav-link" to={el.href}>
                            {el.title}
                          </Link>
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