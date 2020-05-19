import React, {
  FunctionComponent,
  useState,
  useEffect,
  useContext,
} from 'react';
import { useRouteMatch } from 'react-router-dom';

import './ChatPanel.css';
import { Chat } from '../../models/models';
import ChatItem from '../ChatItem/ChatItem';
import { getChatMessages } from '../../api/api';
import AppContext from '../../context/AppContext';

const ChatPanel: FunctionComponent = () => {
  let match = useRouteMatch();
  const recipientId = (match.params as any).userId;

  const [text, setText] = useState('');
  const [chats, setChats] = useState<Chat[]>([]);
  const currentUser = useContext(AppContext).currentUser!;

  useEffect(() => {
    const chats = getChatMessages(currentUser.id, recipientId);

    setChats(chats);
  }, [currentUser.id, recipientId]);

  function handleSend() {
    setChats([
      ...chats,
      {
        sender: currentUser,
        text,
        date: new Date(),
      },
    ]);
    setText('');
  }

  function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      handleSend();
    }
  }

  return (
    <div className="chat-panel__container">
      <div className="chat-panel-messages">
        {chats.map((chatItem, index) => (
          <ChatItem key={index} chatItem={chatItem} currentUser={currentUser} />
        ))}
      </div>

      <div className="chat-panel__controls">
        <input
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
          className="chat-panel__input"
          onKeyPress={handleKeyPress}
        />

        <button onClick={handleSend} className="chat-panel__send-btn">
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatPanel;
