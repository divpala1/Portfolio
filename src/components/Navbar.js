import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
      };

    const goToAbout = () => {
        window.scrollTo({
            top: 920,
            behavior: 'smooth',
        });
    };

    const goToProjects = () => {
        window.scrollTo({
            top: 1641,
            behavior: 'smooth',
        });
    };

    const goToContact = () => {
        window.scrollTo({
            top: 2804,
            behavior: 'smooth',
        });
    };

    return (
        <nav className='navbar'>
            <div className="navbar-container">
                <Link to="/" className='navbar-logo'>
                    &lt; Divyajeet /&gt;
                </Link>

                <ul className={'navbar-menu'}>
                    <li className="navbar-item" onClick={goToTop}>
                        <Link to="/" className='navbar-link'>
                            Home
                        </Link>
                    </li>
                    <li className="navbar-item" onClick={goToAbout}>
                        <Link to="/" className='navbar-link'>
                            About
                        </Link>
                    </li>
                    <li className="navbar-item" onClick={goToProjects}>
                        <Link to="/" className='navbar-link'>
                            Projects
                        </Link>
                    </li>
                    <li className="navbar-item" onClick={goToContact}>
                        <Link to="/" className='navbar-link'>
                            Contact me
                        </Link>
                    </li>
                </ul>


            </div>
        </nav>
    )
}

export default Navbar