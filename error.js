// // ErrorPage.js
// import React from 'react';

// const ErrorPage = () => {
//   const goToHomePage = () => {
//     window.history.back();
//   };

//   return (
//     <div className="container error-container">
//       <h1 className="display-4">Oops! Something went wrong.</h1>
//       <p className="lead">We're sorry, but it seems there's been an error. Please try again later.</p>
//       <button onClick={goToHomePage}>Back to Previous Page</button>
//     </div>
//   );
// };

// export default ErrorPage;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate();

    const goToPreviousPage = () => {
        window.history.length > 1 ? window.history.go(-1) : navigate('/');
    };

    return (
        <div className="container error-container">
            <h1 className="display-4">Oops! Something went wrong.</h1>
            <p className="lead">We're sorry, but it seems there's been an error. Please try again later.</p>
            <NavLink to={window.history.length > 1 ? window.history.go(-1) : '/'}> {/* Fixing NavLink usage */}
                <button >Back to Previous Page</button>
            </NavLink>
        </div>
    );
};

