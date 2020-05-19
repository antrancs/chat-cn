export interface User {
  name: string;
  id: string;
}

export interface Chat {
  text: string;
  sender: User;
  date: Date;
}
