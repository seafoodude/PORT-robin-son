import React from 'react'
import "./css/about.css";
import Frunk from '../assets/in_frunk.jpg'
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={Frunk} alt="About Image" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>2+ Years Learning</small>
                        </article>

                        {/* <article className='about__card'>
                            <FiUsers className='about__icon' />
                            <h5>Something</h5>
                            <small>Something</small>
                        </article> */}

                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon' />
                            <h5>Projects</h5>
                            <small>3+ completed projects</small>
                        </article>
                    </div>

                    <p>
                    Hi! My name is Michael. I graduated in the Fall of 2022 from UCLA with a BA in Philosophy. I have a passion for coding and a desire to learn more about different programming languages and interactive applications. I started to learn in high school through AP Computer Science, and took classes in C and Logic at the college level. I recently graduated from the UCLA EdX coding bootcamp as of Spring 2023, and have finalized my status as a Fullstack Developer.
                    </p>

                    <a href="#contact" className='btn btn-primary lighten'>Let's Talk</a>
                </div>
            </div>
            
        </section>
    )
}

export default About