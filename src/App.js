import React, { useEffect, useState } from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from './Chatbot/config';
import ActionProvider from './Chatbot/ActionProvider';
import MessageParser from './Chatbot/MessageParser';
import './App.css'


function App() {

  // const [pythonMessage, setPythonMessage] = useState('');

  // useEffect(() => {
  //   // Fetch data from Python API
  //   fetch('http://127.0.0.1:5000/api/hello')
  //     .then(response => response.json())
  //     .then(data => setPythonMessage(data.message))
  //     .catch(error => console.error('Error:', error));
  // }, []);

  return (
    <div className="App">
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
}

export default App;
