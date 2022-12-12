import React, { useState, useEffect } from 'react';
import './About.scss'
import { AppWrapp } from "../../wrapper";

import { motion } from 'framer-motion'
import { images } from '../../constans'

import { urlFor, client } from "../../client";

const About = () => {
    const [abouts, setAbouts] = useState([]);

    useEffect(() => {
        const query = '*[_type == "abouts"]';

        client.fetch(query).then((data) => {
            setAbouts(data);
        });

    }, []);

    return (
        <>
            <h2 className="head-text">I am an <span>IT specialist</span>, who fell in love with <span>creating websites.</span></h2>
            <div className="app__profiles">
                {abouts.map((about, index) => (
                    <motion.div
                        whileInViev={{ opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5, type: 'tween'}}
                        className="app__profile-item"
                        key={about.title + index}
                    >
                        <img src={urlFor(about.imgUrl)} alt={about.title} />
                        <h2 className="bold-text" style={{ marginTop: 20 }}>
                            {about.title}
                        </h2>
                        <p className="p-text" style={{ marginTop: 10 }}>
                            {about.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </>
    );
};

export default AppWrapp(About, "about");
