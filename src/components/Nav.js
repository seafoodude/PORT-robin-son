import React from 'react'
import './css/nav.css'
import { BiHome } from 'react-icons/bi'
import { FiUser } from 'react-icons/fi'
import { AiOutlineBook } from 'react-icons/ai'
import { AiOutlineProject } from 'react-icons/ai'
import { AiOutlinePhone } from 'react-icons/ai'
import { useState } from 'react'

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
    return (
        <nav>
            <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><BiHome /></a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FiUser /></a>
            <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><AiOutlineBook /></a>
            <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><AiOutlineProject /></a>
            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiOutlinePhone /></a>
        </nav>
    )
}

export default Nav