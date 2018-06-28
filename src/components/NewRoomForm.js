import React from 'react';

const NewRoomForm = () => (
  <form className="room__form">
    <input
      className="room__form__input"
      type="text"
      name="new__room"
      placeholder="Create a room"
      required
    />
    <button className="room__form__button" type="submit">
      +
    </button>
  </form>
);

export default NewRoomForm;
