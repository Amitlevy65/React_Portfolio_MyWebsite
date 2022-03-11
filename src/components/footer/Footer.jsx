/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer id='footer'>
      <a href="#" className='footer__logo'>Amit Levy</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        {/* <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li> */}
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/amit.levy.9" target='_blank' rel="noreferrer"><FaFacebookF/></a>
        <a href="https://www.instagram.com/amitlevy65/" target='_blank' rel="noreferrer"><FiInstagram/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Amit Levy. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer