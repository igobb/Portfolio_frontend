import React, { useState } from 'react';

import { images } from '../../constans';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';

const Footer = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const { username, email, message } = formData;

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        setLoading(true);

        const contact = {
            _type: 'contact',
            name: formData.username,
            email: formData.email,
            message: formData.message,
        };

        client.create(contact)
            .then(() => {
                setLoading(false);
                setIsFormSubmitted(true);
            })
            .catch((err) => console.log(err));
    };

    return (
        <>
            {!isFormSubmitted ? <h2 className="head-text">If you want to contact me, <span>try this</span></h2> : <div>
                <h3 className="head-text">Thank you for <span>your message!</span></h3>
            </div>}

            <div className="app__footer-cards">
                <div className="app__footer-card ">
                    <img src={images.email} alt="email" />
                    <a href="mailto:t.golab06@gmail.com" className="p-text">t.golab06@gmail.com</a>
                </div>
                <div className="app__footer-card">
                    <img src={images.mobile} alt="phone" />
                    <a href="tel:725424824" className="p-text">725424824</a>
                </div>
            </div>
            {!isFormSubmitted ? (
                <form onSubmit={handleSubmit} className="app__footer-form app__flex">
                        <div className="app__flex">
                            <input className="p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} required/>
                        </div>
                        <div className="app__flex">
                            <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} required/>
                        </div>
                        <div>
                        <textarea
                            className="p-text"
                            placeholder="Here is place for your message!"
                            value={message}
                            name="message"
                            onChange={handleChangeInput}
                            required
                        />
                        </div>
                        <button type="submit" className="p-text" >{!loading ? 'Send Message' : 'Sending...'}</button>
                </form>
            ) : ''}
        </>
    );
};

export default AppWrap(
    MotionWrap(Footer, 'app__footer'),
    'contact',
    'app__whitebg',
);