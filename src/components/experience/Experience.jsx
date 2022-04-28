import React from 'react'
import './experience.css'
import {TiInputChecked} from "react-icons/ti"

const Experience = () => {
    return (
        <section id='experience'>
            <h5>What Skills I have</h5>
            <h2>Both sides of me!</h2>

            <div className='container experience__container'>
                <div className="experience__frontend">
                    <h3>Hard skills</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <TiInputChecked className='experience__details-icon'/>
                            <div>
                                <h4>C/C++</h4>
                                <small className='text-light'>Advanced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <TiInputChecked className='experience__details-icon'/>
                            <div>
                                <h4>CSS</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <TiInputChecked className='experience__details-icon'/>
                            <div>
                                <h4>JAVASCRIPT</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <TiInputChecked className='experience__details-icon'/>
                            <div>
                                <h4>REACT</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <TiInputChecked className='experience__details-icon'/>
                            <div>
                                <h4>SOLIDITY</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <TiInputChecked className='experience__details-icon'/>
                            <div>
                                <h4>TOKENOMICS</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>
                {/* END OF FRONTEND */}

                <div className="experience__backend">
                    <h3>Soft skills</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <TiInputChecked className='experience__details-icon'/>
                            <div>
                                <h4>Team Lead</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <TiInputChecked className='experience__details-icon'/>
                            <div>
                                <h4>Communicator</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <TiInputChecked className='experience__details-icon'/>
                            <div>
                                <h4>Creative</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <TiInputChecked className='experience__details-icon'/>
                            <div>
                                <h4>Eager learner</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <TiInputChecked className='experience__details-icon'/>
                            <div>
                                <h4>Lenguages</h4>
                                <small className='text-light'>English, Spanish & Catalan</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience