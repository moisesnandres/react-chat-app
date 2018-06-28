import React, { Component } from 'react';
import Message from './Message';

class MessageList extends Component {
  scrollDiv = React.createRef();

  componentDidUpdate() {
    this.scrollDiv.current.scrollIntoView({ behavior: 'smooth' });
  }

  render() {
    return (
      <div className="message__list">
        <div>
          {this.props.messages.map(message => (
            <Message
              key={message.id}
              username={message.senderId}
              text={message.text}
            />
          ))}
        </div>
        <div className="message__list__empty" ref={this.scrollDiv} />
      </div>
    );
  }
}

export default MessageList;
