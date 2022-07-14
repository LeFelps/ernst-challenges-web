import React from 'react';
import './App.css';

import Dashboard from './components/navigation/Dashboard';
import Auth from './components/auth/Auth';
import { ToastProvider } from './components/utilities/toast/ToastContext';
import ToastContainer from './components/utilities/toast/ToastContainer';

const user = localStorage.getItem('user');

function App() {
  return (
    <div className="app">
      <ToastProvider>
        <ToastContainer />
        {user ?
          <Dashboard />
          :
          <Auth />
        }
      </ToastProvider>
    </div>
  );
}

export default App;
