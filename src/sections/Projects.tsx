
import React from 'react';
import { projects } from '../data/resume';
import { FaGithub, FaExternalLinkAlt, FaFolder } from 'react-icons/fa';

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-bold text-lightText dark:text-white shrink-0">
          <span className="text-primary mr-2">03.</span> Some Things I've Built
        </h2>
        <div className="h-px bg-gray-300 dark:bg-gray-700 w-full max-w-xs"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative bg-white dark:bg-darkCard p-8 rounded-lg shadow-lg hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full border border-gray-100 dark:border-transparent"
          >
            <div className="flex justify-between items-start mb-6">
              <FaFolder className="text-4xl text-primary" />
              <div className="flex gap-4">
                {project.link.includes('github') ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-accent transition-colors">
                    <FaGithub size={20} />
                  </a>
                ) : (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-accent transition-colors">
                    <FaExternalLinkAlt size={20} />
                  </a>
                )}
              </div>
            </div>

            <h3 className="text-xl font-bold mb-3 text-lightText dark:text-gray-100 group-hover:text-primary transition-colors">
              <a href={project.link} target="_blank" rel="noreferrer">
                {project.name}
              </a>
            </h3>

            <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">
              {project.description}
            </p>

            <ul className="flex flex-wrap gap-3 font-mono text-xs text-gray-500 dark:text-gray-400">
              {project.tech.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
