import React from 'react';
import '../../App.js';
import About from '../About';
import Contact from '../Contact.js';
import Projects from '../Projects';
import Starter from '../Starter';


function Home() {
  return (
    <>
        <Starter />
        <About />
        <Projects />
        <Contact />
    </>
  )
}

export default Home;