import './searchResult.css';
import React, { Component, Fragment } from 'react';
import Content from '../../components/content';

export default class SearchResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      text: ''
    };
  }

  //methods
  loadPosts = () => {
    const { match } = this.props; // match.params.string
    console.log(typeof match.params.string);
    fetch(`http://jsonplaceholder.typicode.com/posts`)
      .then((response) => response.json())
      .then((posts) => {
        this.setState({
          posts,
          text: match.params.string
        });
        this.searching(); // поиск
      })
      .catch((error) => {
        this.setState({
          posts: [],
          text: ''
        });
        alert('Загрузка постов для поиска не удалась!!!');
        console.log(error.message);
      })
  }

  // поиск по постам
  searching = () => {

    const { posts, text } = this.state;
    const st = this.serachText;
    const srchPosts = posts.filter(function (obj) {
      return st(obj, text);
    });

    this.setState({ posts: srchPosts });
  }

  // поиска теста в объекте
  serachText = (obj, text) => {
    const { body, title } = obj;
    return body.includes(text) || title.includes(text) ? true : false;
  }

  componentDidMount() {
    this.loadPosts();
  }

  render() {
    const { posts } = this.state;

    return (
      <Fragment>
        <Content contents={posts} />
      </Fragment>
    )
  }
}