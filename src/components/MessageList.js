import React from 'react';
import Message from './Message';

const MessageList = ({ messages }) => (
  <div className="message__list">
    {messages.map(message => (
      <Message
        key={message.id}
        username={message.senderId}
        text={message.text}
      />
    ))}
  </div>
);

export default MessageList;
