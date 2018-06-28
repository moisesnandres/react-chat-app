import React from 'react';

const SendMessageForm = () => (
  <form className="message__form">
    <input
      className="message__form__input"
      type="text"
      placeholder="Type your message and hit ENTER"
      name="new__message"
    />
  </form>
);

export default SendMessageForm;
