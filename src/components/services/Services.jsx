import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
      <section id='services'>
        <h5>Where I can help</h5>

        <h2>Services</h2>

        <div className="container services__container">
          <article className="service">
            <div className="service__head">
              <h3>Web development</h3>
            </div>

            <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon'/>
                <p> Website design and structure</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Process automatization</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>API rest apis and connections</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Great dynamics and interactions</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>DDBB and users administration</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Deployment and final usage</p>
              </li>
            </ul>
          </article>

          {/*end of block 1*/}
          <article className="service">
            <div className="service__head">
              <h3>Blockchain technologies</h3>
            </div>

            <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Protocols architecture</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>DAPPS creation from Front to Back</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>NFTs collections programming</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>DeFi automatizations</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Implementation of DAO's and usage</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Advisory in web3 projects</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Tokenomics evolution analysis</p>
              </li>
            </ul>
          </article>

          {/*end of block 2*/}
          <article className="service">
            <div className="service__head">
              <h3>Entrepreneurship</h3>
            </div>

            <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Ideas advisoring</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Digital business models</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Market targetting</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Product evaluation</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Branding</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Digitalization of business</p>
              </li>
            </ul>
          </article>
        </div>
      </section>
  )
}

export default Services