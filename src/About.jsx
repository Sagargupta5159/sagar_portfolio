import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
      <div className="about-card">
        <p>
          I am a passionate <strong>Full-Stack Developer</strong> with hands-on experience in building scalable, user-friendly web applications using technologies like <strong>React, Node.js, Express.js, MongoDB</strong>, and modern frameworks. My expertise spans both frontend and backend development, allowing me to create seamless, end-to-end solutions.
        </p>

        <p>
          I enjoy transforming ideas into real-world applications, from crafting responsive UIs to implementing secure APIs and integrating third-party services. My recent work includes projects in <strong>Slack API integration</strong>, <strong>stock market prediction</strong>, and <strong>weather data visualization</strong>.
        </p>

        <p>
          Beyond coding, I am constantly exploring new tools, improving my problem-solving skills, and contributing to open-source projects. My goal is to build impactful software that not only meets business needs but also delivers exceptional user experiences.
        </p>

        {/* Skills / LeetCode Section */}
        <div className="skills-section">
          <h3>Coding Skills & Achievements</h3>
          <ul className="skills-list">
            <li>Proficient in <strong>JavaScript, Python, TypeScript, Node.js, React, Django</strong></li>
            <li>Database: <strong>MongoDB, MySQL</strong></li>
            <li>
              Data Structures & Algorithms: Solved <strong>700+ questions on LeetCode</strong>
            </li>
            <li>Version Control: <strong>Git, GitHub</strong></li>
            <li>Other: <strong>REST APIs, OAuth 2.0, Slack API integration</strong></li>
          </ul>
          <p>
            Check my LeetCode profile: <a href="https://leetcode.com/u/sagar2201641540086/" target="_blank" rel="noopener noreferrer">LeetCode Profile</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
