import React from 'react'
import './css/nav.css'
import {BiHome} from 'react-icons/bi'
import {FiUser} from 'react-icons/fi'
import {AiOutlineProject} from 'react-icons/ai'
import {AiOutlinePhone} from 'react-icons/ai'

const Nav = () => {
  return (
    <nav>
        <a href="#"><BiHome /></a>
        <a href="#about"><FiUser /></a>
        <a href="#projects"><AiOutlineProject /></a>
        <a href="#contact"><AiOutlinePhone /></a>
    </nav>
  )
}

export default Nav