import React, {useRef} from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com';


const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_g8epzis', 'template_jo97lbl', form.current, 'SYH93u9UW55plk5En')

        e.target.reset();
    };

    return (
        <section id='contact'>
            <h5>Get in touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className='contact__option-icon'/>
                        <h4>Email</h4>
                        <h5>orifarfig@gmail.com</h5>
                        <a href="mailto:orifarfig@gmail.com">Send an email</a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className='contact__option-icon'/>
                        <h4>Whatsapp</h4>
                        <h5>(+34) 685 34 14 32</h5>
                        <a href="https://api.whatsapp.com/send?phone=34685341432&text=Hello%20Oriol,%20I%20am%20interested%20in%20your%20profile!"
                           target="_blank">Send a message</a>
                    </article>
                </div>
                {/*END OF CONTACT OPTIONS*/}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required/>
                    <input type="email" name='email' placeholder='Your Email' required/>
                    <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact