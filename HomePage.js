// HomePage.js
import React, { useEffect } from 'react';

const HomePage = () => {
  const checkNetworkConnection = () => {
    const online = navigator.onLine;
    if (!online) {
    //   window.location.href = "/error.html";
         window.history.back(); 
    }
  };

  useEffect(() => {
    checkNetworkConnection();

    window.addEventListener('online', checkNetworkConnection);
    window.addEventListener('offline', checkNetworkConnection);

    return () => {
      window.removeEventListener('online', checkNetworkConnection);
      window.removeEventListener('offline', checkNetworkConnection);
    };
  }, []);

  return (
    <div className="container">
      <h1>Welcome to My Website</h1>
    </div>
  );
};

export default HomePage;
