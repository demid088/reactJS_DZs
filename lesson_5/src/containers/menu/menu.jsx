import React, { Component, Fragment } from 'react';
import './menu.css';
import Menu from '../../components/menu';

export default class MenuContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      menu: [],
      active: 0
    };
  }
  
  //methods
  loadMenu = () => {
    this.setState({ loading: true });

    const { menu } = [
      { "href": "/home", "title": "Home" },
      { "href": "/blog", "title": "Blog" },
      { "href": "/users", "title": "Users" }
    ];

    this.setState({
      loading: false,
      menu: menu
    })
  }

  clickMenu = () => {

  }

  componentDidMount() {
    this.loadMenu();
    document.addEventListener('click', this.clickMenu);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.clickMenu);
  }

  render() {
    const { menu, loading, active } = this.state;

    return (
      <Fragment>
        <Menu menu={menu} active={active} title="ReactJS" />
        {loading ? 'LOADING...' : ''}
      </Fragment>
    )
  }
}