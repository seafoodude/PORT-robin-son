import React from 'react'
import './css/footer.css'
import {FiInstagram} from 'react-icons/fi'
import {AiOutlineFacebook} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Michael Huang</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://instagram.com/michaelhuang_rides"><FiInstagram/></a>
        <a href="https://www.facebook.com/michael.huang.5680899/"><AiOutlineFacebook/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Huang Productions. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer