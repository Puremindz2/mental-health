import React, { useState } from 'react';
import axios from 'axios';
import ChatWindow from './ChatWindow';
import ChatInput from './ChatInput';

const ChatApp = () => {
  const [messages, setMessages] = useState([]);

  const sendMessage = async (userInput) => {
    const newMessage = { sender: 'user', text: userInput };
    setMessages([...messages, newMessage]);

    try {
      // Make API request to IBM Watson Assistant to get chatbot response
      const response = await axios.post('YOUR_BACKEND_API_ENDPOINT', {
        userInput,
      });

      const botResponse = { sender: 'bot', text: response.data.message };
      setMessages([...messages, botResponse]);
    } catch (error) {
      console.error('Error fetching chatbot response:', error);
    }
  };

  return (
    <div className="chat-app">
      <ChatWindow messages={messages} />
      <ChatInput onSendMessage={sendMessage} />
    </div>
  );
};

export default ChatApp;
