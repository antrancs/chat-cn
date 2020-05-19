import { users, chatsData } from '../data/chats';

export const getUsers = (currentUserId: string) => {
  return users.filter((user) => user.id !== currentUserId);
};

export const getCurrentUser = (currentUserId: string) => {
  return users.filter((user) => user.id === currentUserId)[0];
};

export const getChatMessages = (currentUserId: string, recipientId: string) => {
  return chatsData[`${currentUserId}-${recipientId}`] || [];
};
