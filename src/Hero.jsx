import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-image fade-in-left">
          <img src="/sagar.jpg" alt="Sagar" />
        </div>

        <div className="hero-text fade-in-right">
          <h1>Hi, I am Sagar</h1>
          <p className="subtitle">Full Stack Developer & Problem Solver</p>

          <p className="hero-intro">
            Hello there! I thrive on <span className="highlight">curiosity</span> and love to dive into new things, always eager to learn about the latest trends and innovative ideas in the ever-evolving <span className="highlight">tech landscape</span>.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn">See My Work</a>
            <a href="/resume.pdf" download className="btn">Download Resume</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
