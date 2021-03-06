import './users.css';
import React, { Component, Fragment } from 'react';
import Users from '../../components/users';

import { connect } from 'react-redux';
import { load } from 'actions/users';

class UsersContainer extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     loading: true,
  //     users: [],
  //     page: 1
  //   };
  // }

  //methods
  // loadUsers = () => {
  //   //AJAX
  //   const { page } = this.state;

  //   this.setState({ loading: true });

  //   fetch(`http://jsonplaceholder.typicode.com/users?_limit=10&_page=${page}`)
  //     .then((response) => response.json())
  //     .then((users) => {
  //       this.setState({
  //         loading: false,
  //         users: this.state.users.concat(users),
  //         page: this.state.page + 1
  //       })
  //     })
  //     .catch(() => {
  //       this.setState(
  //         { loading: false }
  //       )
  //     })
  // }

  // handleScroll = () => {
  //   let documentHeight = Math.max(
  //     document.body.scrollHeight, document.documentElement.scrollHeight,
  //     document.body.offsetHeight, document.documentElement.offsetHeight,
  //     document.body.clientHeight, document.documentElement.clientHeight
  //   ); // высота документа
  //   let clientHeight = document.documentElement.clientHeight; // высота видимая
  //   let scrollHeight = window.pageYOffset; // высота прокрутки
    
  //   if (documentHeight - clientHeight - scrollHeight === 0) {
  //     if (!this.state.loading) {
  //       this.loadUsers();
  //     }
  //   }
  // }

  componentDidMount() {
    const { loadUsers } = this.props;
    
    loadUsers();
    // this.loadUsers();
    // window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    // window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const { users, loading } = this.props;

    return (
      <Fragment>
        <Users users={users} />
        {loading ? 'LOADING...' : ''}
      </Fragment>
    )
  }
}

function mapStateToProps(state, props){
  return {
    ...props,
    users: state.users.entities,
    loading: state.users.loading
  }
}

function mapDispatchToProps(dispatch, props){
  return {
    ...props,
    loadUsers: () => load(dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer) // замыкание