import React from 'react';

function Skills() {
  const skills = [
    'HTML', 'CSS', 'JavaScript', 'NextJs', 'Node.js', 'Go Lang' , 'Dart' , 'Kotlin' ,
    'Express', 'MongoDB', 'MySQL', 'Python', 'C++','Spring frameWork' ,
    'Git', 'GitHub', 'Vite', 'Streamlit', 'TypeScript' , 'ReactJs' ,'ML', 'Netlify'
  ];

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
