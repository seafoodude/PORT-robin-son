import React from 'react'
import './css/contact.css'
import { MdOutlineEmail } from 'react-icons/md'
/* import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs' */
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_28urt4l', 'template_gbpz84c', form.current, 'oBwhnMGL3MfOt9Yil')

        e.target.reset();
    };

    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div class='contact__container container'>
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>michaelhuang777@gmail.com</h5>
                        <a href="mailto:michaelhuang777@gmail.com" target="_blank">Send a message</a>
                    </article>
                    {/* <article className="contact__option">
            <RiMessengerLine/>
            <h4>Messenger</h4>
            <h5>egatortutorials</h5>
            <a href="https://m.me/">Send a message</a>
            </article>
          <article className="contact__option">
            <BsWhatsapp/>
            <h4>WhatsApp</h4>
            <h5>+123456789</h5>
            <a href="https://api.whatsapp.com/send?phone">Send a message</a>
            </article> */}
                </div>
                {/* End of contact options */}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required />
                    <input type="email" name='email' placeholder='Your Email' required />
                    <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact