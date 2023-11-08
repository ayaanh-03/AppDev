import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';

function App() {
  const [message, setMessage] = useState('Hello, World!');
  const [isWorldMessage, setIsWorldMessage] = useState(true);
  const [inputText, setInputText] = useState('');
  const [customMessages, setCustomMessages] = useState([]);

  const toggleMessage = () => {
    setIsWorldMessage(!isWorldMessage);
    setMessage(isWorldMessage ? 'Hello, React!' : 'Hello, World!');
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const addCustomMessage = () => {
    if (inputText.trim() !== '') {
      setCustomMessages([...customMessages, `Hello ${inputText}`]);
      setInputText('');
    }
  };

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={toggleMessage}>Toggle Message</button>

      <div>
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Enter a name"
        />
        <button onClick={addCustomMessage}>Add Custom Message</button>
      </div>

      <div>
        <h2>Custom Messages:</h2>
        <ul>
          {customMessages.map((customMessage, index) => (
            <li key={index}>{customMessage}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;