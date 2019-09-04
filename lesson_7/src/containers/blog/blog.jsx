import './blog.css';
import React, { Component, Fragment } from 'react';
import Content from '../../components/content';

import { connect } from 'react-redux';
import { load } from 'actions/blog';

class BlogContainer extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     loading: true,
  //     contents: [],
  //     page: 1
  //   };
  // }

  //methods
  // loadContents = () => {
  //   //AJAX
  //   const { page } = this.state;

  //   this.setState({ loading: true });

  //   fetch(`http://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`)
  //     .then((response) => response.json())
  //     .then((contents) => {
  //       this.setState({
  //         loading: false,
  //         contents: this.state.contents.concat(contents),
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
  //       this.loadContents();
  //     }
  //   }
  // }

  componentDidMount() {
    const { loadContents } = this.props;
    
    loadContents();
    // this.loadContents();
    // window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    // window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const { contents, loading } = this.props;

    return (
      <Fragment>
        <Content contents={contents} />
        {loading ? 'LOADING...' : ''}
      </Fragment>
    )
  }
}

function mapStateToProps(state, props){
  return {
    ...props,
    contents: state.blog.entities,
    loading: state.blog.loading
  }
}

function mapDispatchToProps(dispatch, props){
  return {
    ...props,
    loadContents: () => load(dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogContainer) // замыкание