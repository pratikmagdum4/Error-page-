// ErrorPage.js
import React from 'react';

const ErrorPage = () => {
  const goToHomePage = () => {
    window.history.back();
  };

  return (
    <div className="container error-container">
      <h1 className="display-4">Oops! Something went wrong.</h1>
      <p className="lead">We're sorry, but it seems there's been an error. Please try again later.</p>
      <button onClick={goToHomePage}>Back to Previous Page</button>
    </div>
  );
};

export default ErrorPage;
