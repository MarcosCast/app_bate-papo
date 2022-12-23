import React from 'react';
import { ChatEngine } from 'react-chat-engine';

import Feed from './components/Feed';
import './App.css';

const App = () => {
  return (
    <div>
      <ChatEngine
        projectID={process.env.REACT_APP_POJECT_ID}
        userName='admin'
        userSecret={process.env.REACT_APP_USER_SECRET}
        //Dimensão
        height='100vh'
        //Feed
        renderChatFeed={(chatProps) => <Feed {... chatProps} />}
      />
    </div>
  );
}

export default App;
