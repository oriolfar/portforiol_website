import React from 'react'
import './about.css'
import ME from '../../assets/oriol_face_about_me2.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className='container about__container'>
                <div className='about__me'>
                    <div className="about__me-image">
                        <img src={ME} alt="About Image"/>
                    </div>
                </div>
                <div className='about__content'>
                    <div className="about__cards">
                        <article className='about__card '>
                            <FaAward className='about__icon'/>
                            <h5>Experience</h5>
                            <small>2+ Years as software developer</small>
                        </article>
                        <article className='about__card '>
                            <FiUsers className='about__icon'/>
                            <h5>Studies</h5>
                            <h6>Epitech</h6>
                            <small>· Degree in IT engineering</small>
                            <div></div>
                            <small>· Master in digital innovation</small>
                        </article>
                        <article className='about__card '>
                            <VscFolderLibrary className='about__icon'/>
                            <h5>Projects</h5>
                            <small>80+ completed projects</small>
                        </article>
                    </div>
                    <p>
                        Currently studying a Master
                        on Digital Innovation in Epitech
                        Barcelona, after doing the IT engineering degree.<br/><br/>
                        Despite this, I really enjoy entrepreneurship. Business and finance had always an important part
                        in my career. In 2021 I founded a company who achieved selling more than 5500 products in
                        Catalonia.<br/><br/>
                        I am involved in Blockchain
                        technologies since 2019 when I
                        started to focus myself on learning
                        and getting to know better the world
                        of DAO's, DeFi and DAPPS.<br/>
                        I really believe that the future is
                        descentralized and we are here to
                        make it happen.
                    </p>
                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About