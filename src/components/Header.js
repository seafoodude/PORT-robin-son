import React from 'react'
import './css/header.css'
import CTA from './CTA'
import ME from '../assets/me.jpg'
import HeaderSocial from './HeaderSocials'

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello, I'm</h5>
                <h1>Michael Huang</h1>
                <h5>Fullstack Developer</h5>
                <CTA />
                <HeaderSocial />

                <div className="">
                    <img className="me" src={ME} alt="me" />
                </div>
            </div>
        </header>
    )
}

export default Header