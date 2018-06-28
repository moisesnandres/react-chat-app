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
    messages: []
  };

  componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator,
      userId: 'icaJS',
      tokenProvider: new Chatkit.TokenProvider({ url: tokenUrl })
    });

    chatManager.connect().then(currentUser => {
      currentUser.subscribeToRoom({
        roomId: 10447031,
        hooks: {
          onNewMessage: message => {
            this.setState({ messages: [...this.state.messages, message] });
          }
        }
      });
    });
  }

  render() {
    return (
      <div className="app">
        <RoomList />
        <MessageList messages={this.state.messages} />
        <NewRoomForm />
        <SendMessageForm />
      </div>
    );
  }
}

export default App;
