
import React from 'react';
import { skills } from '../data/resume';

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-bold text-lightText dark:text-white shrink-0">
          <span className="text-primary mr-2">01.</span> About Me
        </h2>
        <div className="h-px bg-gray-300 dark:bg-gray-700 w-full max-w-xs"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 text-lg text-gray-600 dark:text-gray-300 leading-relaxed space-y-4">
          <p>
            Hello, I&apos;m Mridul.
          </p>
          <p>
            I&apos;m a Software Engineer with over 4+ years of experience building reliable, scalable systems and AI-driven products that live on the internet. My work is deeply rooted in backend engineering, with a strong passion for AI innovation and data-driven problem solving.
          </p>
          <p>
            I specialize in <span className="text-primary">Python</span>, <span className="text-primary">AI/ML</span>, and <span className="text-primary">Full-Stack Engineering</span>, and have had the opportunity to work across diverse environments — from an observability product company to an AI startup, and a large enterprise organization. These experiences have shaped my ability to design robust systems, collaborate across teams, and deliver real-world impact.
          </p>
          <p>
            Here are a few technologies I've been working with recently:
          </p>

          <div className="grid grid-cols-2 gap-2 mt-4 font-mono text-sm">
            {['Python', 'TypeScript', 'JavaScript', 'React JS', 'Flask', 'FastAPI', 'Go'].map((skill) => (
              <div key={skill} className="flex items-center gap-2">
                <span className="text-primary">▹</span> {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Skill Pills */}
        <div className="space-y-6">
          <h3 className="font-bold text-xl dark:text-white">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {[...skills.languages, ...skills.frameworks, ...skills.tools, ...skills.ai_ml, ...skills.libraries, ...skills.databases].map(skill => (
              <span key={skill} className="px-3 py-1 text-sm bg-gray-100 dark:bg-darkCard text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-700">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
