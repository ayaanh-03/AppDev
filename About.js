// About.js

import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  const projects = [
    {
      title: 'Software Engineering Intern',
      company: 'REECARD, LLC',
      date: 'September 2023 – Present',
      description: [
        'Leading a project on developing a Captcha service for Reecard’s website under the supervision of CEO Kevan Parang',
        'Implementing a prompt-generating algorithm to leverage Stable Diffusion to introduce bottlenecks for spam bots while ensuring a seamless experience for human users',
        'Emphasis on incorporating emotions to take advantage of a lack of emotional intelligence in many machines while maintaining ease of recognition for humans',
        'Building a network on LinkedIn to promote the product to companies, software developers, etc.',
      ],
    },
    {
      title: 'Analyzing the performance of 3SAT-Solving Algorithms',
      company: 'University of Maryland, College Park',
      date: 'May 2021 - October 2021',
      description: [
        'Conducted a personal research project under the mentorship of Dr. William Gasarch to investigate the performance of 3SAT-solving algorithms under various conditions',
        'Implemented 7Alg and a derivation of DPLL that selected the most frequent literal in Java and ran them thousands of times on different types of 3CNF formulae',
        'Completed a statistical analysis of the data collected using scatterplots and regression and wrote a report of findings',
      ],
    },
  ];

  return (
    <div>
      <h1>Portfolio</h1>
      <h2>Work Experience</h2>

      {projects.map((project, index) => (
        <div key={index} className="card">
          <h3>{project.title}</h3>
          <p>{project.company}</p>
          <p>{project.date}</p>
          <ul>
            {project.description.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      ))}

      <Link to="/">Go to Home Page</Link>
    </div>
  );
}

export default About;
