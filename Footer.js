import React from 'react';
import './Footer.css';
import logo from '../../Assets/LOGO_old.png';
import { FaYoutube, FaInstagram, FaTwitter, FaWhatsapp, FaFacebook } from 'react-icons/fa';

function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-logo">
                <img src={logo} alt="Company Logo" className="footer-logo" />
            </div>
            <div className="footer-copy">
                <p>© 2023 Brainwave Learning Library. All rights reserved.</p>
            </div>
            <div className="footer-socials">
                <a href="https://youtube.com/@Brainwaveslearninglibrary?si=HlM0V_uHmY9pHMxa" target="_blank" rel="noopener noreferrer" className="youtube"><FaYoutube /></a>
                <a href="https://www.instagram.com/brainwaveslearninglibrary?igsh=MWtpcnA3bjJxZW5tdQ" target="_blank" rel="noopener noreferrer" className="instagram"><FaInstagram /></a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="twitter"><FaTwitter /></a>
                <a href="https://www.whatsapp.com/" target="_blank" rel="noopener noreferrer" className="whatsapp"><FaWhatsapp /></a>
                <a href="https://www.facebook.com/profile.php?id=61554675087488" target="_blank" rel="noopener noreferrer" className="facebook"><FaFacebook /></a>
            </div>
        </div>
    );
}

export default Footer; // export the component
