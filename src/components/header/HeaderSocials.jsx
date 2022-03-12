import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {VscGithub} from 'react-icons/vsc'
import {FiTwitter} from 'react-icons/fi'


const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="htpps://linkedin.com" target="_blank"><BsLinkedin/></a>
            <a href="htpps://github.com" target="_blank"><VscGithub/></a>
            <a href="htpps://twitter.com" target="_blank"><FiTwitter/></a>
        </div>
    )
}

export default HeaderSocials