import React, { useState } from 'react';
import './App.css';

import Dashboard from './components/navigation/Dashboard';
import Auth from './components/auth/Auth';
import { ToastProvider } from './components/utilities/toast/ToastContext';
import { BattleProvider } from './components/utilities/battle/BattleProvider';
import ToastContainer from './components/utilities/toast/ToastContainer';


function App() {

  const [user, setUser] = useState(localStorage.getItem('user'));

  return (
    <div className="app">
      <ToastProvider>
        <BattleProvider>
          <ToastContainer />
          {user ?
            <Dashboard removeUser={() => setUser(null)} />
            :
            <Auth setUser={setUser} />
          }
        </BattleProvider>
      </ToastProvider>
    </div>
  );
}

export default App;
