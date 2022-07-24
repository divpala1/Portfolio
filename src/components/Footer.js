import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className='footer'>
                    <a href="https://github.com/divpala1/">
                        <img src="images/logo-git.png" alt='github' />
                    </a>

                    <a href="https://www.linkedin.com/in/divyajeet-pala-717796218/">
                        <img src="images/logo-linkedin.png" alt='linkedin'/>
                    </a>

                    <a href="mailto:divyajeetpala@gmail.com">
                        <img src="images/logo-gmail.png" alt='gmail'/>
                    </a>

                    <a href="pdf/Resume.pdf">
                        <img src="images/logo-resume.png" alt='resume' className='bgWhite'/>
                    </a>
        </div>
    )
}

export default Footer