import './search.css';
import React, { Component, Fragment } from 'react';
import Search from '../../components/search';

export default class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  //methods
  onSearch = (string) => {
    document.location.href = `/search/${string}`;
  }

  componentDidMount() {
    
  }

  componentWillUnmount() {
    
  }

  render() {
    return (
      <Fragment>
        <Search onSearch={this.onSearch} />
      </Fragment>
    )
  }
}