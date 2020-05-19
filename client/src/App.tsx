import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import ContactListPanel from './components/ContactListPanel/ContactListPanel';
import ChatPanel from './components/ChatPanel/ChatPanel';
import AppContext from './context/AppContext';
import { getCurrentUser } from './api/api';

function App() {
  const currentUserId = 'U01';

  const currentUser = getCurrentUser(currentUserId);

  return (
    <Router>
      <AppContext.Provider value={{ currentUser: currentUser }}>
        <div className="App">
          <ContactListPanel currentUser={currentUser} />

          <Switch>
            <Route path="/chat/:userId">
              <ChatPanel />
            </Route>

            <Route path="/"></Route>
          </Switch>
        </div>
      </AppContext.Provider>
    </Router>
  );
}

export default App;
