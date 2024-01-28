import React from 'react';
import './UsefulLinks.css';
import { FaYoutube, FaInstagram, FaTwitter, FaWhatsapp, FaFacebook } from 'react-icons/fa';
import YoutubeIcon from "../../../Assets/Icons/ColorYoutube.png";
import TwitterIcon from "../../../Assets/Icons/ColorTwitter.png";
import InstagramIcon from "../../../Assets/Icons/ColorInstagram.png";
import WhatsappIcon from "../../../Assets/Icons/ColorWhatsapp.png";
import FacebookIcon from "../../../Assets/Icons/ColorFacebook.png";

function UsefulLinks() {
    return (
        <div className="useful-links">
            <h2 className="useful-h2">USEFUL LINKS</h2>
            <p>Follow us on social media and stay updated with our latest activities.</p>
            <div className="usefull-icons">
                <a href="https://youtube.com/@Brainwaveslearninglibrary?si=HlM0V_uHmY9pHMxa" target="_blank"
                   rel="noopener noreferrer">
                    <img
                        src={YoutubeIcon}
                        alt="Youtube"
                        className="usefull3-icon"
                    />
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                    <img
                        src={TwitterIcon}
                        alt="Twitter"
                        className="usefull3-icon"
                    />
                </a>
                <a href="https://www.instagram.com/brainwaveslearninglibrary?igsh=MWtpcnA3bjJxZW5tdQ" target="_blank"
                   rel="noopener noreferrer">
                    <img
                        src={InstagramIcon}
                        alt="Instagram"
                        className="usefull3-icon"
                    />
                </a>
                {/*<a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer">*/}
                {/*    <img*/}
                {/*        src={WhatsappIcon}*/}
                {/*        alt="Whatsapp"*/}
                {/*        className="usefull3-icon"*/}
                {/*    />*/}
                {/*</a>*/}
                <a href="https://www.facebook.com/profile.php?id=61554675087488" target="_blank"
                   rel="noopener noreferrer">
                    <img
                        src={FacebookIcon}
                        alt="Facebook"
                        className="usefull3-icon"
                    />
                </a>
            </div>
        </div>
    );
}

export default UsefulLinks;
