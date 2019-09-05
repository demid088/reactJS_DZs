import './user.css';
import React, { Component, Fragment } from 'react';
import User from '../../components/user';

export default class UserContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      user: {},
    };
  }

  //methods
  loadUser = () => {
    //AJAX

    const { match } = this.props;

    this.setState({ loading: true });

    fetch(`http://jsonplaceholder.typicode.com/users/${ match.params.id }`)
      .then((response) => response.json())
      .then((user) => {
        this.setState({
          loading: false,
          user
        })
      })
      .catch(() => {
        this.setState(
          { loading: false }
        )
      })
  }

  componentDidMount() {
    this.loadUser();
  }

  render() {
    const { user, loading } = this.state;

    return (
      <Fragment>
        <User user={user} />
        {loading ? 'LOADING...' : ''}
      </Fragment>
    )
  }
}