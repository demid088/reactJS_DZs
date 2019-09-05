import React, { Component, Fragment } from 'react';
import './menu.css';
import Menu from '../../components/menu';

export default class MenuContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      menu: [],
      active: 1
    };
  }
  
  //methods
  loadMenu = () => {
    this.setState({ loading: true });

    const menu = [
      { "href": "/", "title": "Home", "id": 1 },
      { "href": "/blog", "title": "Blog", "id": 2 },
      { "href": "/comments", "title": "Comments", "id": 3 },
      { "href": "/users", "title": "Users", "id": 4 }
    ];

    this.setState({
      loading: false,
      menu
    })
  }

  clickMenu = (e) => {
    if (e.target.className === 'nav-link') {
      this.setState({ active: parseInt(e.target.id) });
    }
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