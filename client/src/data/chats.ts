import { User } from '../models/models';
import { subHours } from 'date-fns';

const currentTime = Date.now();

export const users: User[] = [
  {
    name: 'Mike',
    id: 'U01',
  },
  {
    name: 'Susan',
    id: 'U02',
  },
  {
    name: 'Anna',
    id: 'U03',
  },
  {
    name: 'Tom',
    id: 'U04',
  },
];

export const chatsData = {
  'U01-U02': [
    {
      sender: users[0],
      text: 'Hello',
      date: subHours(currentTime, 5),
    },
    {
      sender: users[1],
      text: 'How are you',
      date: subHours(currentTime, 3),
    },
    {
      sender: users[1],
      text: 'Supp??',
      date: subHours(currentTime, 2),
    },
  ],

  'U01-U03': [
    {
      sender: users[2],
      text: 'Hello',
      date: subHours(currentTime, 7),
    },
    {
      sender: users[0],
      text: 'How are you',
      date: subHours(currentTime, 3),
    },
    {
      sender: users[2],
      text: 'Supp??',
      date: subHours(currentTime, 1),
    },
  ],
} as {
  [key: string]: {
    sender: User;
    text: string;
    date: Date;
  }[];
};
