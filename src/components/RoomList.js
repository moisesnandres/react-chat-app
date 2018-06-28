import React from 'react';

const RoomList = ({ rooms }) => (
  <div className="room__list">
    <h2>Rooms:</h2>
    <ul>
      {rooms.map(room => (
        <li key={room.id} className="room__list__item">
          # {room.name}
        </li>
      ))}
    </ul>
  </div>
);

export default RoomList;
