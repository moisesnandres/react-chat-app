import React from 'react';

const Message = ({ username, text }) => (
  <div className="message">
    <div className="message__username">{username}</div>
    <div className="message__text">{text}</div>
  </div>
);

export default Message;
