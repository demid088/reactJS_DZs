import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap';


import React, { Component } from 'react';
import ReactDom from 'react-dom';

import Menu from './components/menu';
import Container from './components/container';
import Login from './components/login';
import Content from './components/content';
import Search from './components/search';
import Categories from './components/categories';

const items = [
  { href: '/', title: 'Home' },
  { href: '#', title: 'News' },
  { href: '#', title: 'Blog' }
];

class App extends Component {
  render() {
    return (
      <div className="test1">
        <Menu items_prop={items} title={'Start React JS'}></Menu>
        <Container width={[8, 4]}>
          {/* <Login title={'Login'} type={'button'}></Login> */}
          <Content></Content>
          <Container>
            <Search></Search>
            <Categories></Categories>
          </Container>
        </Container>
      </div>
    );
  }
}

//ReactDom.render(/Что/, /Куда/)
ReactDom.render(<App />, document.querySelector('#root'));