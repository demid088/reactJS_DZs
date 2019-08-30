import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap';
import Routes from './routes';

import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Menu from './containers/menu';
import Container from './components/container';
import Search from './components/search';
// import Comments from './containers/comments';
// import Login from './components/login';
// import Content from './components/content';
// import Categories from './components/categories';
// import Timer from './components/timer';
// import Home from './containers/home';

// class App extends Component {
//   render() {
//     return (
//       <div className="test1">
//         {/* <Timer /> */}
//         <Menu items_prop={items} title={'Start React JS'}></Menu>
//         <Container width={[8, 4]}>
//           {/* <Login title={'Login'} type={'button'}></Login> */}
//           <Content></Content>
//           <Container>
//             <Search></Search>
//             <Categories></Categories>
//           </Container>
//         </Container>
//       </div>
//     );
//   }
// }

class App extends Component {
  render() {
    return (
      <div className="main">
        <Menu />
        <Container width={[8, 4]}>
          <Switch>
            {/* <Route path="/" component={Home} exact /> */}
            {Routes.map(
              (route, index) => <Route key={index} {...route} />
            )}
          </Switch>
          <Search></Search>
        </Container>
      </div>
    );
  }
}

//ReactDom.render(/Что/, /Куда/)
ReactDom.render(
  <BrowserRouter><App /></BrowserRouter>,
  document.querySelector('#root')
);