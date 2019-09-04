import './comments.css';
import React, { Component, Fragment } from 'react';
import CommentsList from '../../components/commentsList';

import { connect } from 'react-redux';
import { load } from 'actions/comments';

class CommentsContainer extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     loading: true,
  //     comments: [],
  //     page: 1
  //   };
  // }

  //methods
  // loadComments = () => {
  //   //AJAX
  //   const { page } = this.state;

  //   this.setState({ loading: true });

  //   fetch(`http://jsonplaceholder.typicode.com/comments?_limit=15&_page=${page}`)
  //     .then((response) => response.json())
  //     .then((comments) => {
  //       this.setState({
  //         loading: false,
  //         comments: this.state.comments.concat(comments),
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
  //       this.loadComments();
  //     }
  //   }
  // }

  componentDidMount() {
    const { loadComments } = this.props;
    
    loadComments();
    // this.loadComments();
    // window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    // window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const { comments, loading } = this.props;

    return (
      <Fragment>
        <CommentsList comments={comments} />
        {loading ? 'LOADING...' : ''}
      </Fragment>
    )
  }
}

function mapStateToProps(state, props){
  return {
    ...props,
    comments: state.comments.entities,
    loading: state.comments.loading
  }
}

function mapDispatchToProps(dispatch, props){
  return {
    ...props,
    loadComments: () => load(dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer) // замыкание