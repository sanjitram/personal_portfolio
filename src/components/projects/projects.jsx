import React, { useState } from 'react';
import './projects.css';

const projectsData = [
  {
    id: 1,
    title: 'Personal Portfolio',
    description: 'A front-end web application for a personal portfolio.',
    icon: '💻', 
    link: 'https://personal-portfolio-six-mu-24.vercel.app'
  },
  {
    id: 2,
    title: 'More',
    description: 'Coming soon...',
    icon: '+', 
    link: 'https://blank.org/'
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(selectedProject === project ? null : project);
  };

  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className={`project-icon ${selectedProject === project ? 'active' : ''}`}
            onClick={() => handleProjectClick(project)}
          >
            <span className="icon">{project.icon}</span>
            <p>{project.title}</p>
            
          </div>
        ))}
      </div>
      {selectedProject && (
        <div className="project-details">
          <h3>{selectedProject.title}</h3>
          <p>{selectedProject.description}</p>
          <a href={selectedProject.link} target="_blank">VIEW PROJECT</a>
        </div>
      )}
    </div>
  );
};

export default Projects;
