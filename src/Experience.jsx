import React from 'react';

function Experience() {
  const experiences = [
    {
      role: 'Web Developer Intern',
      company: 'Cognifyz Technologies',
      duration: 'Sep 2023 - Dec 2023',
      location: 'Remote',
      details: [
        'Developed responsive web applications using React and Node.js.',
        'Collaborated with the design team to implement UI/UX improvements.',
        'Assisted in designing and developing scalable solutions tailored to meet customer requirements.',
      ],
      type: 'work',
    },
    {
      role: 'Data Science Intern',
      company: 'CodSoft',
      duration: 'Sep 2024 - Oct 2024',
      location: 'Remote',
      details: [
        'Completed a 2-week virtual internship focused on practical data science applications and projects.',
        'Gained hands-on experience in analyzing datasets, building models, and interpreting data-driven insights.',
        'Maintained client relationships and delivered projects on time.',
      ],
      type: 'work',
    },
    {
      role: 'B.Tech Student',
      company: 'Pranveer Singh Institute of Technology',
      duration: '2022 - Present',
      location: 'Kanpur',
      details: [
        'Specializing in Computer Science (Data Science).',
        'Completed projects in Web development, Data analysis, and AI & ML.',
      ],
      type: 'education',
    },
  ];

  // Separate work and education experiences
  const workExperiences = experiences.filter(exp => exp.type === 'work');
  const educationExperiences = experiences.filter(exp => exp.type === 'education');

  return (
    <section id="experience" className="experience">
      <h2>Work Experience & Education</h2>

      <h3>Work Experience</h3>
      {workExperiences.map(({ role, company, duration, location, details }, idx) => (
        <div key={idx} className="experience-item">
          <h4>{role}</h4>
          <p className="company">{company} | {location}</p>
          <p className="duration">{duration}</p>
          <ul>
            {details.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      ))}

      <h3 style={{ marginTop: '3rem' }}>Education</h3>
      {educationExperiences.map(({ role, company, duration, location, details }, idx) => (
        <div key={idx} className="experience-item">
          <h4>{role}</h4>
          <p className="company">{company} | {location}</p>
          <p className="duration">{duration}</p>
          <ul>
            {details.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Experience;
