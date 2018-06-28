import React, { Component } from 'react';
import Chatkit from '@pusher/chatkit';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';
import NewRoomForm from './components/NewRoomForm';
import SendMessageForm from './components/SendMessageForm';
import { tokenUrl, instanceLocator } from './config';
import './styles.css';

class App extends Component {
  state = {
    messages: [],
    joinableRooms: [],
    joinedRooms: [],
    roomId: null
  };

  componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator,
      userId: 'icaJS',
      tokenProvider: new Chatkit.TokenProvider({ url: tokenUrl })
    });

    chatManager
      .connect()
      .then(currentUser => {
        this.currentUser = currentUser;
        this.getRooms();
      })
      .catch(error => console.log('Error on connecting: ', error));
  }

  sendMessage = text => {
    this.currentUser.sendMessage({ text, roomId: this.state.roomId });
  };

  createRoom = name => {
    this.currentUser
      .createRoom({ name })
      .then(room => this.subscribeToRoom(room.id))
      .catch(error => console.log('Error with createRoom: ', error));
  };

  getRooms = () => {
    this.currentUser
      .getJoinableRooms()
      .then(joinableRooms => {
        this.setState({ joinableRooms, joinedRooms: this.currentUser.rooms });
      })
      .catch(error => console.log('error on joinableRooms: ', error));
  };

  subscribeToRoom = roomId => {
    this.setState({ messages: [] });
    this.currentUser
      .subscribeToRoom({
        roomId,
        hooks: {
          onNewMessage: message => {
            this.setState({ messages: [...this.state.messages, message] });
          }
        }
      })
      .then(room => {
        this.setState({ roomId: room.id });
        this.getRooms();
      })
      .catch(error => console.log('Error on subscribing to room: ', error));
  };

  render() {
    return (
      <div className="app">
        <RoomList
          rooms={[...this.state.joinedRooms, ...this.state.joinableRooms]}
          subscribeToRoom={this.subscribeToRoom}
          roomId={this.state.roomId}
        />
        <MessageList
          messages={this.state.messages}
          roomId={this.state.roomId}
        />
        <NewRoomForm createRoom={this.createRoom} />
        <SendMessageForm
          sendMessage={this.sendMessage}
          disabled={!this.state.roomId}
        />
      </div>
    );
  }
}

export default App;
