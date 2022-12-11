import React, {useState} from 'react'
import './Navbar.scss'
import { images } from '../../constans'
import { HiMenu, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'

const Navbar = () => {

    const [toggle, setToggle] = useState(false);

    return (
        <div>
            <nav className='app__navbar'>
                <div className='app__navbar-logo'>
                    <img src={images.logo} alt='Logo of Tomasz Gołąb portfolio site'/>
                </div>
                <ul className='app__navbar-links'>
                    {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                        <li className='app__flex p-text' key={`link-${item}`}>
                           <div />
                            <a href={`#${item}`}>{item}</a>
                        </li>

                    ) )}
                </ul>
                <div className='app__navbar-menu'>
                    <HiMenu onClick={() => setToggle(true)} />

                    {toggle && (
                        <motion.div
                        whileInView={{ x: [350, 0] }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                        >
                            <HiX onClick={() => setToggle(false)}/>
                            <ul>
                            {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                                </li>
                            ))}
                            </ul>
                        </motion.div>
                    )}

                </div>
            </nav>
        </div>
    );
};

export default Navbar;
