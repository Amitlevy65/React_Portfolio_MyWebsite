import React from 'react'
import './about.css'
// import ME from '../../assets' << MY PICTURE IMPORT
import {MdVolunteerActivism} from 'react-icons/md'
import {FaVolleyballBall} from 'react-icons/fa'
import {SiSololearn} from 'react-icons/si'
import {TiStarburst} from 'react-icons/ti'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        {/* <div className="about__me"> */}
          {/* <div className="about__me-image"> */}
            {/* <img src="" alt="" />  */}
            {/* Your Picture here ^^^ */}
          {/* </div> */}
        {/* </div> */}

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <MdVolunteerActivism className='about__icon'/>
              <h5>"Brave Together"</h5>
              <small>Volunteer Android Apps Developer</small>
            </article>     
            <article className="about__card">
              <FaVolleyballBall className='about__icon'/>
              <h5>Team Player</h5>
              <small>Volleyball National League Player</small>
            </article>
            <article className="about__card">
              <SiSololearn className='about__icon'/>
              <h5>Adaptability</h5>
              <small>Quick Learner and Hard Worker</small>
            </article>
          </div>
          <p>
          <TiStarburst className='p__icon'/>
          Hardworking College Student seeking employment as a Junior Programmer.
          </p>
          <p>
          <TiStarburst className='p__icon'/>
          Bringing forth a motivated attitude and a variety of powerful skills.
          </p>
          <p>
          <TiStarburst className='p__icon'/>
          Adept in various social media platforms and office technology programs.
          </p>
          <p>
          <TiStarburst className='p__icon'/>
          Committed to utilizing my skills and motivation to further the mission of a company.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About