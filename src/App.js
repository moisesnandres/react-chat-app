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
    joinedRooms: []
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
        this.currentUser.getJoinableRooms().then(joinableRooms => {
          this.setState({
            joinableRooms,
            joinedRooms: this.currentUser.rooms
          }).catch(error => console.log('Error on rooms: ', error));
        });
        this.currentUser.subscribeToRoom({
          roomId: 10447031,
          hooks: {
            onNewMessage: message => {
              this.setState({ messages: [...this.state.messages, message] });
            }
          }
        });
      })
      .catch(error => console.log('Error on connecting: ', error));
  }

  sendMessage = text => {
    this.currentUser.sendMessage({ text, roomId: 10447031 });
  };

  render() {
    return (
      <div className="app">
        <RoomList
          rooms={[...this.state.joinedRooms, ...this.state.joinableRooms]}
        />
        <MessageList messages={this.state.messages} />
        <NewRoomForm />
        <SendMessageForm sendMessage={this.sendMessage} />
      </div>
    );
  }
}

export default App;
