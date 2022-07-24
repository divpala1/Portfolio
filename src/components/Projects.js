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
                        <a href="https://dl-melody-generator.herokuapp.com/">
                            <CardItem
                                src="images/image-2.jpeg"
                                title="Melody Generator"
                                intro="A website using LSTM for generation of a melodious melody from the input for the user wanting some COOL new music."
                            />
                        </a>
                        <a href="https://github.com/divpala1/Heart-Disease-Predictor">
                            <CardItem
                                src="images/image-4.jpg"
                                title="Heart Disease Predictor"
                                path="/"
                                intro="A website using Machine Learning models to predict the heart condition of the dear user <3."
                            />
                        </a>
                    </ul>
                    <ul className='projects-items'>
                        <a href="https://github.com/divpala1/Movie-Recommender">
                            <CardItem
                                src="images/image-5.jpg"
                                title="Movie Recommender"
                                path="/"
                                intro="A project which implements collaborative and content-based filter to recommend AWESOME movies to the user."
                            />
                        </a>
                        <a href="https://github.com/divpala1/Jarvis-Voice-Assistant-with-Chatbot">
                            <CardItem
                                src="images/image-7.jpg"
                                title="Voice Assistant"
                                path="/"
                                intro="A voice-assistant to perform day-to-day tasks for the lazy user who doesn't want to move a finger. Also, if that user's reading this, go EXERCISE."
                            />
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Projects