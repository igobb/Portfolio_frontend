import React from 'react'
import './Header.scss'

import { motion } from 'framer-motion'
import { images } from '../../constans'
import Typewriter from 'typewriter-effect'

const scaleVariants = {
    whileInView: {
        scale: [0, 1],
        opacity: [0, 1],
        transition: {
            duration: 1,
            ease: 'easeInOut'
        }
    }
}

const Header = () => {

    return (
        <div id="home" className='app__header app__flex'>
            <motion.div
                whileInView={{ x: [-200, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className='app__header-info'
            >
                <div className='app__header-badge'>
                    <div className='badge-cmp app__flex'>
                        <div style={{ marginLeft: 20 }}>
                            <p className='p-text'>Hi, I am...</p>
                        </div>
                    </div>
                    <div className="tag-cmp app__flex">
                        <h1 className='head-text' >
                            <Typewriter
                                options={{
                                    strings: ['Tomasz Gołąb', 'Igob', 'Junior Frontend Developer'],
                                    autoStart: true,
                                    loop: true,
                                    deleteSpeed: 1,
                                }}
                            /></h1>
                    </div>
                </div>
            </motion.div>
            <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, delayChildren: 1 }}
                className='app__header-img'
            >
                <img src={images.profile} alt='profile background' />
                <motion.img
                    whileInView={{ scale: [0, 1] }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    src={images.circle}
                    alt="Profile circle"
                    className="overlay_circle"
                />
            </motion.div>
            <motion.div
                variants={scaleVariants}
                whileInView={scaleVariants.whileInView}
                className="app__header-circles"
            >
                {[images.flutter, images.redux, images.sass].map((circle, index) => (
                    <div className="circle-cmp app__flex" key={`circle-${index}`}>
                        <img src={circle} alt="profile_bg" />
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default Header;
