import React from 'react';

const ProjectList = ({ projects }) => {
  return (
    <ul>
      {projects.map((project, index) => (
        <li key={index}>
          <h3>{project.title}</h3>
          <p>{project.subtitle}</p>
          <ul>
            {project.bullets.map((bullet, bulletIndex) => (
              <li key={bulletIndex}>{bullet}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default ProjectList;
