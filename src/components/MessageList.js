import React from 'react';
import Message from './Message';

const MessageList = () => (
  <div className="message__list">
    <Message username="moisesnandres" text="hello" />
    <Message username="bot" text="world!" />
  </div>
);

export default MessageList;
