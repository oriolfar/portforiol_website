import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/bw_me.png'
import HeaderSocials from './HeaderSocials'


const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Oriol Farràs Figuera</h1>
                <h5 className="text-light">Fullstack developer & Digital innovator</h5>
                <CTA/>
                <HeaderSocials/>

                <div className="me">
                    <img src={ME} alt="me"/>
                </div>

                <a href="#contact" className='scroll__down'>Scroll Down</a>
            </div>
        </header>
    )
}

export default Header