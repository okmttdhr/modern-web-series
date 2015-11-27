import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as messageAction from 'actions/message-actions';
import MessageList from 'components/message-list';
import MessageEntryBox from 'components/message-entry-box';
import './style.less';

function mapStateToProps(state) {
  return {
    messages: state.messages,
    currentMessage: state.currentMessage
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(messageAction, dispatch);
}

class App extends React.Component {
  render() {
    return (
      <div>
        <MessageList messages={this.props.messages}/>
        <MessageEntryBox onSubmit={this.props.addMessage}/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
