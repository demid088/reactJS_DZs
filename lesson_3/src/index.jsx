import React, { Component } from 'react';
import ReactDom from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'popper.js';
import 'bootstrap';

import Menu from './components/menu';
import Container from './components/container';
import Login from './components/login';
import Content from './components/content';

const items = [
  { href: '/', title: 'Home' },
  { href: '/news', title: 'News' },
  { href: '/blog', title: 'Blog' }
];

class App extends Component {
  render() {
    return (
      <div className="test1">
        <Container>
          <Menu items_prop={items} title={'Main menu'}></Menu>
          <Login title={'Login'} type={'button'}></Login>
          <Content></Content>
        </Container>
      </div>
    );
  }
}

//ReactDom.render(/Что/, /Куда/)
ReactDom.render(<App />, document.querySelector('#root'));