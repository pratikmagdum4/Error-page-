import React from 'react';
import './UsefulLinks2.css';
import YoutubeIcon from '../../../Assets/Icons/ColorYoutube.png';
import TwitterIcon from '../../../Assets/Icons/ColorTwitter.png';
import InstagramIcon from '../../../Assets/Icons/ColorInstagram.png';
import WhatsappIcon from '../../../Assets/Icons/ColorWhatsapp.png'
import FacebookIcon from '../../../Assets/Icons/ColorFacebook.png';

function UsefulLinks2() {
    return (
        <div className="useful-links2">
            <h2>USEFUL LINKS</h2>
            <p>Follow us on social media and stay updated with our latest activities.</p>
            <div className="usefull2-icons">
                <img
                    src={YoutubeIcon}
                    alt="Youtube"
                    className="usefull2-icon"
                />
                <img
                    src={TwitterIcon}
                    alt="Twitter"
                    className="usefull2-icon"
                />
                <img
                    src={InstagramIcon}
                    alt="Instagram"
                    className="usefull2-icon"
                />
                <img
                    src={WhatsappIcon}
                    alt="Whatsapp"
                    className="usefull2-icon"
                />
                <img
                    src={FacebookIcon}
                    alt="Facebook"
                    className="usefull2-icon"
                />
            </div>
        </div>
    );
}

export default UsefulLinks2;
