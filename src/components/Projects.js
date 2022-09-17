import React from 'react'
import CardItem from './CardItem'
import './Projects.css'

function Projects() {
    return (
        <div className='projects'>
            <div className="projects-heading">
                <h3 className='projects-h3'>Projects</h3>
            </div>

            <div className="projects-container">
                <div className="projects-wrapper">
                    <ul className='projects-items'>
                        <CardItem
                            src="images/image-2.jpg"
                            title="Amazon Clone"
                            path="/"
                            intro="An amazon clone deployed on Google firebase using React JS with an integrated recommendation system which provides personalised recommendations."
                        />

                        <CardItem
                            src="images/image-4.jpg"
                            title="Multi-Disease Detector"
                            path="/"
                            intro="A website deployed on AWS EC2 using CNN and Machine Learning models to detect multiple diseases like Covid-19, cervical cancer, and cardiovascular disease for the dear user <3."
                        />
                    </ul>
                    <ul className='projects-items'>
                        <CardItem
                            src="images/image-2.jpeg"
                            title="Melody Generator"
                            path="/"
                            intro="A website using LSTM for generation of a melodious melody from the input for the user wanting some COOL new music."
                        />

                        <CardItem
                            src="images/image-5.jpg"
                            title="Movie Recommender"
                            path="/"
                            intro="A project which implements collaborative and content-based filter to recommend AWESOME movies to the user."
                        />

                        <CardItem
                            src="images/image-7.jpg"
                            title="Voice Assistant"
                            path="/"
                            intro="A voice-assistant to perform day-to-day tasks for the lazy user who doesn't want to move a finger. Also, if that user's reading this, go EXERCISE."
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Projects
