import React, { useState } from 'react'
import { images } from '../../constans'
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from '../../client'
import './Footer.scss'

const Footer = () => {

    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const { name, email, message } = formData;

    const handleChangeInput = (event) => {
        const { name, value } = event.target

        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = () => {
        setLoading(true);

        const contact = {
            _type: 'contact',
            name: name,
            email: email,
            message: message
        }

        client.create(contact)
            .then(() => {
                setLoading(false);
                setIsFormSubmitted(true);
            })
    }

    return (
        <>
            {!isFormSubmitted ? <h2 className="head-text">If you want to contact me, <span>try this</span></h2> : <div>
                <h3 className="head-text">Thank you for <span>your message!</span></h3>
            </div>}

            <div className="app__footer-cards">
                <div className="app__footer-card">
                    <img src={images.email} alt="email" />
                    <a href="mailto:t.golab06@gmail.com" className="p-text">t.golab06@gmail.com</a>
                </div>
                <div className="app__footer-card">
                    <img src={images.mobile} alt="mobile" />
                    <a href="tel:725424824" className="p-text">725424824</a>
                </div>
            </div>

            {!isFormSubmitted ? <div className="app__footer-form app__flex">
                <div className="app__flex">
                    <input className="p-text" type="text" name="name" placeholder="Your name" value={name} onChange={handleChangeInput} required/>
                </div>
                <div className="app__flex">
                    <input className="p-text" type="email" name="email" placeholder="Your email" value={email} onChange={handleChangeInput} required/>
                </div>
                <div>
                    <textarea className="p-text" name="message" placeholder="Your message" value={message} onChange={handleChangeInput} required/>
                </div>
                <button className="p-text" type="button" onClick={handleSubmit}>{loading ? 'Sending a message' : 'Send your message!'}</button>
            </div>
            : ''}
        </>
    );
};

export default AppWrap(MotionWrap(Footer, "app__footer"), "contact", "app__whitebg");

//TODO ZROBIĆ WALIDACJĘ FORMULARZA
