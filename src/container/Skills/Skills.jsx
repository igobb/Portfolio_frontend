import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion'
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css';
import {AppWrap, MotionWrap} from "../../wrapper";
import { urlFor, client } from "../../client";

import './Skills.scss'

const Skills = () => {

    const [skills, setSkills] = useState([]);

    useEffect(() => {
        const query =  '*[_type == "skills"]'

        client.fetch(query)
            .then((data) => {
                setSkills(data)
            })
    }, []);


    return (
        <>
            <h2 className="head-text">Skills & <span>Tools</span></h2>
            <div className="app__skills-container">
                <motion.div
                    className="app__skills-list"
                >
                    {skills.map((skill) => (
                        <motion.div
                            whileInView={{ opacity: [0, 1] }}
                            transition={{ duration: 0.5 }}
                            className="app__skills-item app__flex"
                            key={skill.name}
                        >
                            <div id={skill.name} className="app__flex" style={{ backgroundColor: skill.bgColor }}>
                                <img src={ urlFor(skill.icon) } alt={skill.name}/>
                                <progress value={skill.level} max='100'/>
                                <h4 className="head-text">{skill.name}</h4>
                            </div>
                            <Tooltip anchorId={skill.name} content={skill.description} place="top" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </>
    );
};

export default AppWrap(MotionWrap(Skills, 'app__skills'), 'skills', 'app__primarybg')
