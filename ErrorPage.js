//

import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate();

    const goToPreviousPage = () => {
        navigate(-1); // Navigate back one step
    };

    return (
        <div className="container error-container">
            <h1 className="display-4">Oops! Something went wrong.</h1>
            <p className="lead">We're sorry, but it seems there's been an error. Please try again later.</p>
            <button onClick={goToPreviousPage}>Back to Previous Page</button>
        </div>
    );
};

export default ErrorPage;

// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';
//
// const ErrorPage = () => {
//     const navigate = useNavigate();
//
//     const goToPreviousPage = () => {
//         window.history.length > 1 ? window.history.go(-1) : navigate('/');
//     };
//     return (
//         <div className="container error-container">
//             <h1 className="display-4">Oops! Something went wrong.</h1>
//             <p className="lead">We're sorry, but it seems there's been an error. Please try again later.</p>
//             <NavLink to={window.history.length > 1 ? window.history.go(-1) : '/'}> {/* Fixing NavLink usage */}
//                 <button >Back to Previous Page</button>
//             </NavLink>
//         </div>
//     );
// };
// export default ErrorPage;



// import React,{ useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';
//
// const ErrorPage = () => {
//     const navigate = useNavigate();
//
//     const goToPreviousPage = () => {
//         setShowNavBar(true);
//         // window.history.length > 1 ? window.history.go(-1) : navigate('/');
//     };
//     const [showNavBar, setShowNavBar] = useState(false);
//     const getTargetUrl = () => {
//         // return window.history.length > 1 ? '/' : '/'; // Adjust the target URL accordingly
//         if(setShowNavBar) {
//             return window.history.length > 1 ? window.history.go(-1) : navigate('/');
//         }
//         setShowNavBar(false);
//     };
//
//     return (
//         <div className="container error-container">
//             <h1 className="display-4">Oops! Something went wrong.</h1>
//             <p className="lead">We're sorry, but it seems there's been an error. Please try again later.</p>
//             <NavLink to={getTargetUrl()}>
//                 <button onClick={goToPreviousPage}>Back to Previous Page</button>
//             </NavLink>
//         </div>
// //     );
// };
// export default ErrorPage;

// import React, { useEffect, useState } from 'react';
// import { NavLink } from 'react-router-dom';
//
// const ErrorPage = () => {
//     const [isOnline, setIsOnline] = useState(navigator.onLine);
//
//     useEffect(() => {
//         const handleOnlineStatusChange = () => {
//             setIsOnline(navigator.onLine);
//         };
//
//         window.addEventListener('online', handleOnlineStatusChange);
//         window.addEventListener('offline', handleOnlineStatusChange);
//
//         return () => {
//             window.removeEventListener('online', handleOnlineStatusChange);
//             window.removeEventListener('offline', handleOnlineStatusChange);
//         };
//     }, []);
//
//     return (
//         <div className="container error-container">
//             <h1 className="display-4">Oops! Something went wrong.</h1>
//             {isOnline ? (
//                 <p className="lead">We're sorry, but it seems there's been an error. Please try again later.</p>
//             ) : (
//                 <p className="lead">You are currently offline. Please check your internet connection and try again.</p>
//             )}
//             <NavLink to={window.history.length > 1 ? window.history.go(-1) : '/'} className="nav-link">
//                 <button>Back to Previous Page</button>
//             </NavLink>
//         </div>
//     );
// };
//
// export default ErrorPage;




