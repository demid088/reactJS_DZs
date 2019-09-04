import './home.css';
import React, { Component, Fragment } from 'react';
import Home from '../../components/home';

export default class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      home: {}
    };
  }

  //methods
  loadHome = () => {
    this.setState({ loading: true });

    const home = {
      title: 'Welcome to ReactJS',
      body: 'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable and easier to debug. Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM. We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code. React can also render on the server using Node and power mobile apps using React Native.',
      imgSrc: 'http://qrioustech.com/website-assets/images/reactjs.png',
      imgAlt: 'ReactJS'
    };

    this.setState({
      loading: false,
      home
    });
  }

  componentDidMount() {
    this.loadHome();
  }

  render() {
    const { home, loading } = this.state;

    return (
      <Fragment>
        <Home home={home} />
        {loading ? 'LOADING...' : ''}
      </Fragment>
    )
  }
}