import React from 'react';
import Landing from './components/landing/Landing';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Dashboard from './components/dashboard/Dashboard';
import Analytics from './components/analytics/Analytics';
import CreatePost from './components/create-post/CreatePost';
import Profile from './components/profile/Profile';
import Pipeline from './components/pipeline/Pipeline';
import Calendar from './components/calendar/Calendar';
import AITools from './components/ai-tools/AITools';

function App() {
  const path = window.location.pathname;

  if (path === '/register') {
    return <Register />;
  }
  
  if (path === '/login') {
    return <Login />;
  }

  if (path === '/dashboard') {
    return <Dashboard />;
  }

  if (path === '/analytics') {
    return <Analytics />;
  }

  if (path === '/create-post') {
    return <CreatePost />;
  }

  if (path === '/profile') {
    return <Profile />;
  }

  if (path === '/pipeline') {
    return <Pipeline />;
  }

  if (path === '/calendar') {
    return <Calendar />;
  }

  if (path === '/ai-tools') {
    return <AITools />;
  }

  // Default route is landing page
  return <Landing />;
}

export default App;
