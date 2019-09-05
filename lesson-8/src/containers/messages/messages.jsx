import './messages.css';
import React, { Component, Fragment } from 'react';
import MsgList from '../../components/msgList';
import MsgForm from '../../components/msgForm';

import { connect } from 'react-redux';
import { load, send, listen } from 'actions/messages';

class MessagesContainer extends Component {
  componentDidMount() {
    const { loadMessages, listenMessages } = this.props;
    
    loadMessages();
    listenMessages();
  }

  componentWillUnmount() {

  }

  render() {
    const { messages, send } = this.props;

    return (
      <Fragment>
        <MsgList messages={messages} />
        <MsgForm send={send} />
      </Fragment>
    )
  }
}

function mapStateToProps(state, props){
  return {
    ...props,
    messages: state.messages.entities
  }
}

function mapDispatchToProps(dispatch, props){
  return {
    ...props,
    loadMessages: () => dispatch(load()),
    listenMessages: () => dispatch(listen()),
    send: (message) => send(message)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessagesContainer) // замыкание