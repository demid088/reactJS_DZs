import React, {Component, Fragment} from 'react';
import ReactDom from 'react-dom';
import './menu.css';

export default class Menu extends Component {
  render() {
    const {items_prop, title} = this.props; // props = object
    return(
      <Fragment>
        <h1> {title} </h1>
        <ul className="menu">
          {items_prop.map(el => <li> <a href={el.href}> {el.title} </a> </li>)}
        </ul>
      </Fragment>
    );
  }
}