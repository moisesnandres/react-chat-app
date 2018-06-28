import React, { Component } from 'react';
import Message from './Message';

class MessageList extends Component {
  scrollDiv = React.createRef();

  componentDidUpdate() {
    this.scrollDiv.current.scrollIntoView({ behavior: 'smooth' });
  }

  render() {
    if (!this.props.roomId) {
      return (
        <div
          className="message__list message__list__empty"
          ref={this.scrollDiv}
        >
          <h3>&larr; Join a room!</h3>
        </div>
      );
    }

    return (
      <div className="message__list">
        {this.props.messages.length ? (
          <div>
            {this.props.messages.map(message => (
              <Message
                key={message.id}
                username={message.senderId}
                text={message.text}
              />
            ))}
          </div>
        ) : (
          <h4 className="message__hi">Say hi and start chatting!</h4>
        )}
        <div className="message__list__blank" ref={this.scrollDiv} />
      </div>
    );
  }
}

export default MessageList;
