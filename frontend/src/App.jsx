import React from 'react';
import Landing from './components/landing/Landing';
import Login from './components/login/Login';
import Register from './components/register/Register';

function App() {
  const path = window.location.pathname;

  if (path === '/register') {
    return <Register />;
  }
  
  if (path === '/login') {
    return <Login />;
  }

  // Default route is landing page
  return <Landing />;
}

export default App;
