import React from 'react'
import './About.css'

function About() {
  return (
    <div className='about'>
      <div className="about-heading">
        <h3 className='heading'>About me</h3>
      </div>

      <div className='about-container'>
        <img src="images/image-3.jpeg" alt="" />

        <div className="myDesc">
          Call me <h3>Dev</h3>. <br />An artist who is passionate about <h4>Artificial Intelligence.</h4>
          <p>I am a college student in 4th year majoring in Artificial Intelligence. Head to the projects section to find out about the projects I've worked on. I combine my artistic perspective with my love for maths and AI-ML to create beautiful websites which solve problems using Deep Learning / Machine Learning. <br /> <br /> Checkout my resume below.</p>
          <a href="pdf/Resume.pdf">
            <img src="images/logo-resume.png" alt='resume' className='bgWhite' />
          </a>
        </div>

      </div>

    </div>
  )
}

export default About;