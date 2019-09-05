import './comments.css';
import React, { Component, Fragment } from 'react';
import CommentsList from '../../components/commentsList';

import { connect } from 'react-redux';
import { load } from 'actions/comments';

class CommentsContainer extends Component {
  handleScroll = () => {
    let documentHeight = Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    ); // высота документа
    let clientHeight = document.documentElement.clientHeight; // высота видимая
    let scrollHeight = window.pageYOffset; // высота прокрутки
    
    const { loadComments } = this.props;

    if (documentHeight - clientHeight - scrollHeight === 0) {
      if (!this.props.loading) {
        loadComments();
      }
    }
  }

  componentDidMount() {
    const { loadComments } = this.props;
    loadComments();
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
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
    // loadComments: () => load(dispatch)
    loadComments: () => dispatch(load())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer) // замыкание