import React from 'react';
import { ChatEngine } from 'react-chat-engine';

import './App.css';

const App = () => {
  return (
    <div>
      <ChatEngine
        height='100vh'
        projectID='60107927-3840-4f60-935a-4e4dbafc6d02'
        userName='admin'
        userSecret='0123'
      />
    </div>
  );
}

export default App;
