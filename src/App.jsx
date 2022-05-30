import React from 'react';
import './App.css';

import Dashboard from './components/navigation/dashboard';
import Auth from './components/auth/auth';


const user = localStorage.getItem('user');

function App() {

  return (
    <div className="app">
      {user ?
        <Dashboard />
        :
        <Auth />
      }
    </div>
  );
}

export default App;
