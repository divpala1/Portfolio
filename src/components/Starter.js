import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Starter.css';

function Home() {
    const goToAbout = () => {
        window.scrollTo({
            top: 920,
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
        <div className='home-container'>
            <video src="videos/video-2.mp4" autoPlay loop muted />
            <h1>Hi</h1>
            <p>Call me Dev</p>
            <div className="home-btns">
                <div onClick={goToAbout} className="btn-wrapper">
                    <Button className='btns' buttonStyle={'btn--outline'} buttonSize={'btn--large'}>
                        About me
                    </Button>
                </div>
                
                <div className="btn-wrapper" onClick={goToContact}>
                <Button className='btns' buttonStyle={'btn--primary'} buttonSize={'btn--large'}>
                    Contact
                </Button>
                </div>
            </div>
        </div>
    );
}

export default Home;