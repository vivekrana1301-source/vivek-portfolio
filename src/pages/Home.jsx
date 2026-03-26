import React from 'react';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Hero from '../components/Hero';
import Skill from '../components/Skill';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Projects from '../components/Projects';

const Home = () => {
  return (
    <div>

        <section id="navbar"
        
        >
            <Navbar/>
        </section>

        <section id="hero">
            <Hero/>    
        </section>

        <section id="skill">
             <Skill/>
        </section>

        <section id="projects">
             <Projects/>
        </section>



        <section id='contact'>
            <Contact/>
        </section>

        <section id='footer'>
            <Footer/>
        </section>
    </div>
  );
}

export default Home;
