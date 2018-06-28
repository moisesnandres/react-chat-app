import React, { Component } from 'react';

class NewRoomForm extends Component {
  newRoom = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    const roomName = this.newRoom.current.value;
    this.props.createRoom(roomName);
    e.currentTarget.reset();
  };

  render() {
    return (
      <form className="room__form" onSubmit={this.handleSubmit}>
        <input
          ref={this.newRoom}
          className="room__form__input"
          type="text"
          name="new_room"
          placeholder="Create a room"
          required
        />
        <button className="room__form__button" type="submit">
          +
        </button>
      </form>
    );
  }
}

export default NewRoomForm;
