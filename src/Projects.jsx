import React from 'react';
import './Projects.css'; // <-- Import the CSS file

function Projects() {
  const projects = [
    {
      title: "Stock Vision",
      description: "Predicting stock trends using open interest & trading volume.",
      image: "/images/stock_project.png",
      link: "https://stock-prediction-app-24-cs-ds-4b-14.streamlit.app/",
    },
    {
      title: "Slack Connect App",
      description: "Full-stack app integrating Slack OAuth 2.0 for secure messaging and scheduling.",
      image: "/images/slack_app.png",
      link: "https://slackconnectsagar.netlify.app/",
    },
    {
      title: "Weather Forecast App",
      description: "Web app to check current weather using real-time API data.",
      image: "/images/weather_app.png", // Add this image if available
      link: "https://weatherforcast-miniproject-sagar086.netlify.app/",
    },
    {
      title: "Snake Game",
      description: "Classic snake game built with JavaScript.",
      image: "/images/snake_game.png", // Add this image if available
      link: "https://github.com/Sagargupta5159/Snake-Game.",
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projects.map(({ title, description, image, link }, index) => (
          <div key={index} className="project-card">
            <img src={image} alt={title} className="project-image" />
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer" className="project-btn">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
