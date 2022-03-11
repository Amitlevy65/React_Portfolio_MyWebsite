/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/logo.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5> Hello I'm</h5>
        <h1>Amit Levy</h1>
        <h5 className='text-light'>Computer Science Student - 3rd Year Honor Student</h5>
        <h5 className="text-light">Junior Developer</h5>
        <CTA />
        <HeaderSocials />


        <div className="me">
          <img src={ME} alt="Amit Levy's Image" /> 
        </div>



        <a href="#footer" className='scroll__down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header