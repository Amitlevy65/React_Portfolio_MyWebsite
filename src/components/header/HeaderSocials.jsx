import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/amit-levy-2a79b7204/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        {/* Your LinkedIn Profile ^^ */}
        <a href="https://github.com/Amitlevy65" target="_blank" rel="noreferrer"><FaGithub/></a>
        {/* Your Github Profile */}
        {/* Add more social networks to your liking */}
    </div>
  )
}
// =================== ADD RELEVANT LINKS ABOVE! ===================
export default HeaderSocials