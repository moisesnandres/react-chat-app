import React from 'react';

const RoomList = ({ rooms, subscribeToRoom, roomId }) => {
  const orderedRooms = [...rooms].sort((a, b) => a.id - b.id);
  return (
    <div className="room__list">
      <h2>Rooms:</h2>
      <ul>
        {orderedRooms.map(room => {
          const roomClass = roomId === room.id ? 'room__list__item active' : 'room__list__item';
          return (
            <li key={room.id} className={roomClass}>
              <a href="#" onClick={() => subscribeToRoom(room.id)}>
                # {room.name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RoomList;
