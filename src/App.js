import React, { Component } from 'react';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';
import NewRoomForm from './components/NewRoomForm';
import SendMessageForm from './components/SendMessageForm';
import './styles.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <RoomList />
        <MessageList />
        <NewRoomForm />
        <SendMessageForm />
      </div>
    );
  }
}

export default App;
