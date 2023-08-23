import React from 'react';
import styles from './ChatWindow.module.css';

const ChatWindow = ({ messages }) => {
  return (
    <div className={styles.chatWindow}>
      {messages.map((message, index) => (
        <div key={index} className={`${styles.chatBubble} ${message.sender === 'bot' ? styles.bot : styles.user}`}>
          {message.text}
        </div>
      ))}
    </div>
  );
};

export default ChatWindow;
