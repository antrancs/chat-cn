import { createContext } from 'react';
import { User } from '../models/models';

interface IContext {
  currentUser: User | null;
}

const AppContext = createContext<IContext>({
  currentUser: null,
});

export default AppContext;
