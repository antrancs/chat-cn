import React, { FunctionComponent, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import './ContactListPanel.css';
import { User } from '../../models/models';
import { getUsers } from '../../api/api';

interface IProps {
  currentUser: User;
}

const ContactListPanel: FunctionComponent<IProps> = ({ currentUser }) => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const users = getUsers(currentUser.id);
    setUsers(users);
  }, [currentUser.id]);

  return (
    <aside className="contact-list-panel">
      <h3>Hello {currentUser.name}</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="contact-list__item">
            <NavLink
              activeClassName="contact-list__item--active"
              to={`/chat/${user.id}`}
            >
              {user.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default ContactListPanel;
