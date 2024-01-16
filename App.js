// App.js
import React from 'react';
import ErrorPage from './error.js';
import HomePage from './Homepage.js';

const App = () => {
  
  const isOnline = navigator.onLine;

  return isOnline ? <HomePage /> : <ErrorPage />;
};

export default App;
