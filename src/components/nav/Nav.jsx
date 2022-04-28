/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import './nav.css'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {MdOutlineMessage} from 'react-icons/md'

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')

    const changeSelected = () => {
        if (window.scrollY < 550) {
            console.log("HOME", window.scrollY);
            setActiveNav('#');
        } else if (window.scrollY >= 600 && window.scrollY < 1750) {
            console.log("ABOUT", window.scrollY);
            setActiveNav('#about');
        } else if (window.scrollY >= 1750 && window.scrollY < 2720) {
            console.log("EXPERIENCE", window.scrollY);
            setActiveNav('#experience');
        } else if (window.scrollY >= 2720 && window.scrollY < 5290) {
            console.log("SERVICES", window.scrollY);
            setActiveNav('#services');
        } else if (window.scrollY >= 5290) {
            console.log("CONTACT", window.scrollY);
            setActiveNav('#contact');
        }
    }

    window.addEventListener('scroll', changeSelected)

    return (
        <nav>
            <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
            <a href="#about" onClick={() => setActiveNav('#about')}
               className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
            <a href="#experience" onClick={() => setActiveNav('#experience')}
               className={activeNav === '#experience' ? 'active' : ''}><BiBook/></a>
            <a href="#services" onClick={() => setActiveNav('#services')}
               className={activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a>
            <a href="#contact" onClick={() => setActiveNav('#contact')}
               className={activeNav === '#contact' ? 'active' : ''}><MdOutlineMessage/></a>
        </nav>
    )
}

export default Nav