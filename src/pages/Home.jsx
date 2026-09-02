import React from 'react';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Skill from '../components/Skill';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Projects from '../components/Projects';

const Home = ({ theme, toggleTheme }) => {
  return (
    <div>

        <section id="navbar"
        
        >
            <Navbar theme={theme} toggleTheme={toggleTheme}/>
        </section>

        <section id="hero">
            <Hero/>    
        </section>

        <section id="experience">
            <Experience/>
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
