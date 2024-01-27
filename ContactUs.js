import React, { useState } from 'react';
import './ContactUs.css';
import UsefulLinks3 from './UsefullLinks3/UsefulLinks3';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const isFormEmpty = !name || !email || !message;

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Your form submission logic here
    };

    return (
        <div>
            <div className="contact-form">
                <UsefulLinks3 />
                <form onSubmit={handleSubmit}>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={handleNameChange} />
                    <label>Email:</label>
                    <input type="email" value={email} onChange={handleEmailChange} />
                    <label>Message:</label>
                    <textarea value={message} onChange={handleMessageChange}></textarea>
                    <button type="submit" disabled={isFormEmpty}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
