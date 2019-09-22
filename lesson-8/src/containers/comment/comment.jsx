import './comment.css';
import React, { Component, Fragment } from 'react';
import Comment from '../../components/comment';

export default class CommentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      comment: {},
    };
  }

  //methods
  loadComment = () => {
    const { match } = this.props;

    this.setState({ loading: true });

    fetch(`http://jsonplaceholder.typicode.com/comments/${ match.params.id }`)
      .then((response) => response.json())
      .then((comment) => {
        this.setState({
          loading: false,
          comment
        })
      })
      .catch(() => {
        this.setState(
          { loading: false }
        )
      })
  }

  componentDidMount() {
    this.loadComment();
  }

  render() {
    const { comment, loading } = this.state;

    return (
      <Fragment>
        <Comment comment={comment} />
        {loading ? 'LOADING...' : ''}
      </Fragment>
    )
  }
}