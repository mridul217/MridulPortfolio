
import React from 'react';
import { personalInfo } from '../data/resume';
import { FaDownload } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center items-start pt-16">
      <div className="animate-fade-in space-y-6 max-w-4xl">
        <p className="text-secondary dark:text-accent font-medium text-lg tracking-wide">
          Hi, I am
        </p>

        <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-lightText dark:text-white">
          {personalInfo.name}
          <span className="text-primary">.</span>
        </h1>

        <h2 className="text-4xl md:text-6xl font-bold text-gray-500 dark:text-gray-400">
          I build things for the web.
        </h2>

        <p className="max-w-xl text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          {personalInfo.about}
        </p>

        <div className="flex flex-wrap gap-4 pt-8">
          <a
            href="mailto:sharma.mridul217@gmail.com"
            className="px-8 py-4 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-all font-medium shadow-lg hover:shadow-primary/50"
          >
            Contact Me
          </a>
          {/* If there was a resume link, we'd put it here */}
          <button className="px-8 py-4 border border-primary text-primary dark:text-accent dark:border-accent rounded-lg hover:bg-primary/10 dark:hover:bg-accent/10 transition-all font-medium flex items-center gap-2">
            <FaDownload /> Resume
          </button>
        </div>

        <div className="flex gap-6 mt-12 text-gray-600 dark:text-gray-400">
          {personalInfo.social.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary dark:hover:text-accent transition-colors transform hover:scale-110"
            >
              <social.icon size={28} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
