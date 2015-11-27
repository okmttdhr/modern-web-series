import React, {Component} from 'react';

class MessageList extends Component {
  render() {
    return (
      <ul className='MessageList'>
        {this.props.messages.map((message, index) => {
          return (
            <li key={`MessageList__${index}`}>
              {message.text}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default MessageList;
