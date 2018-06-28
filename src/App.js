import React, { Component } from 'react';
import Message from './components/Message';
import MessageList from './components/MessageList';
import NewRoomForm from './components/NewRoomForm';
import SendMessageForm from './components/SendMessageForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Message />
        <MessageList />
        <NewRoomForm />
        <SendMessageForm />
      </div>
    );
  }
}

export default App;
