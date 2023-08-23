import React, { useState } from 'react';
import styles from './ChatInput.module.css';

const ChatInput = ({ onSendMessage }) => {
  const [userInput, setUserInput] = useState('');

  const handleChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSendMessage = () => {
    if (userInput.trim() !== '') {
      onSendMessage(userInput);
      setUserInput('');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className={styles.chatInputContainer}>
      <input
        type="text"
        placeholder="Type your message here..."
        value={userInput}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        className={styles.chatInput}
      />
      <button onClick={handleSendMessage} className={styles.sendButton}>
        Send
      </button>
    </div>
  );
};

export default ChatInput;
