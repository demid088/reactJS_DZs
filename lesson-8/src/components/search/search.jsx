import React, { Component, Fragment } from 'react';
import ReactDom from 'react-dom';
import './search.css';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
  }

  clickSearch = () => {
    const { onSearch } = this.props;

    this.setState({ search: '' });

    if (typeof onSearch === 'function') {
      onSearch(this.state.search);
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    let { search } = this.state;

    return (
      <Fragment>
        <div className="card my-4">
          <h5 className="card-header">Search</h5>
          <div className="card-body">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Search for..." value={search} onChange={this.handleChange} name="search" />
              <span className="input-group-btn">
                <button onClick={this.clickSearch} className="btn btn-secondary btn-search" type="button">Go!</button>
              </span>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}