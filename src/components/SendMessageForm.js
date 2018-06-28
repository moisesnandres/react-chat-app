import React, { Component } from 'react';

class SendMessageForm extends Component {
  newMessage = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    const message = this.newMessage.current.value;
    this.props.sendMessage(message);
    e.currentTarget.reset();
  };

  render() {
    return (
      <form className="message__form" onSubmit={this.handleSubmit}>
        <input
          ref={this.newMessage}
          className="message__form__input"
          type="text"
          placeholder="Type your message and hit ENTER"
          name="new_message"
        />
      </form>
    );
  }
}

export default SendMessageForm;
