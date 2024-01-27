import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../Assets/logo3.png';
import 'reactjs-popup/dist/index.css';

const Navbar = () => {

    const [mode, setMode] = useState("signin");

    // create a function to toggle the mode
    const toggleMode = () => {
        if (mode === "signin") {
            setMode("signup");
        } else {
            setMode("signin");
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <img src={logo} alt="Company Logo" className="logo"/>
                {/*<img src={logo} alt="Company Logo" className="logo" style={{transform: 'scale(1.2)'}}/>*/}

                {/*<span className="company-name">BRAINWAVE LEARNING LIBRARY</span>*/}
                <span style={{color: 'yellow'}} className="company-name">
                  BRAINWAVE LEARNING LIBRARY
                </span>

            </div>
            <ul className="navbar-links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li className="dropdown-wrapper">
                    <span className="span-1">Extra-Curricular Activities</span>
                    <div className="dropdown-content">
                    <Link to="/offlineactivities">Offline Activities</Link>
                    <Link to="/onlineactivities">Online Activities</Link>


                    </div>
                </li>
                <li>
                    <Link to="/registeredschools">Registered Schools</Link>
                </li>
                <li className="dropdown-wrapper">
                    <span className="span-2">Posts</span>
                    <div className="dropdown-content">
                        <Link to="/activityposts">Activity Posts</Link>
                        <Link to="/performanceposts">Performance Posts</Link>
                        <Link to="/socialmediaposts">Social Media Posts</Link>
                    </div>
                </li>
                <li>
                    <Link to="/about">About Us</Link>
                </li>
                <li>
                    <Link to="/contactus">Contact Us</Link>
                </li>
                <li>
                    <Link to={`/${mode}`}>
                        <button className="signin-button" onClick={toggleMode}>
                            {mode === "signin" ? "SignIn" : "SignUp"}
                        </button>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
//                        <Link to="/upcomingactivity">Upcoming Activity</Link>