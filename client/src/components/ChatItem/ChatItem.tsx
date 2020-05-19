import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { format } from 'date-fns';

import './ChatItem.css';
import { Chat, User } from '../../models/models';

interface IProps {
  chatItem: Chat;
  currentUser: User;
}

const ChatItem: FunctionComponent<IProps> = ({ chatItem, currentUser }) => {
  const isSelf = currentUser.id === chatItem.sender.id;
  return (
    <div
      className={classnames('chat-item', {
        'chat-item--self': isSelf,
      })}
    >
      <div
        className={classnames('chat-item__message', {
          'chat-item__message--self': isSelf,
        })}
      >
        <small className="chat-item__date">
          {format(chatItem.date, 'iii, HH:mm')}
        </small>
        <div>{chatItem.text}</div>
      </div>
    </div>
  );
};

export default ChatItem;
