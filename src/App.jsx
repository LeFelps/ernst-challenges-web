import React, { useState } from 'react';
import './App.css';

import Dashboard from './components/navigation/Dashboard';
import Auth from './components/auth/Auth';
import { ToastProvider } from './components/utilities/toast/ToastContext';
import ToastContainer from './components/utilities/toast/ToastContainer';


function App() {

  const [user, setUser] = useState(localStorage.getItem('user'));

  return (
    <div className="app">
      <ToastProvider>
        <ToastContainer />
        {user ?
          <Dashboard />
          :
          <Auth setUser={setUser} />
        }
      </ToastProvider>
    </div>
  );
}

export default App;
