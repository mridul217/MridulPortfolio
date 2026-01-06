
import React, { useState } from 'react';
import { experience } from '../data/resume';

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="py-20">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-bold text-lightText dark:text-white shrink-0">
          <span className="text-primary mr-2">02.</span> Where I've Worked
        </h2>
        <div className="h-px bg-gray-300 dark:bg-gray-700 w-full max-w-xs"></div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Tab List */}
        <div className="flex md:flex-col overflow-x-auto md:w-64 shrink-0 border-b md:border-b-0 md:border-l border-gray-300 dark:border-gray-700">
          {experience.map((job, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`
                px-6 py-4 text-left whitespace-nowrap md:whitespace-normal transition-all duration-300 border-b-2 md:border-b-0 md:border-l-2 -mb-[2px] md:-mb-0 md:-ml-[2px]
                ${activeTab === index
                  ? 'text-primary border-primary bg-primary/5 dark:bg-primary/10'
                  : 'text-gray-500 dark:text-gray-400 border-transparent hover:text-primary dark:hover:text-accent hover:bg-gray-50 dark:hover:bg-darkCard'}
              `}
            >
              {job.company}
            </button>
          ))}
        </div>

        {/* Panel Content */}
        <div className="min-h-[400px]">
          <div className="space-y-4 animate-fade-in">
            <h3 className="text-xl font-bold text-lightText dark:text-gray-100">
              {experience[activeTab].role}{" "}
              <span className="text-primary">@ {experience[activeTab].company}</span>
            </h3>
            <p className="font-mono text-sm text-gray-500 dark:text-gray-400">
              {experience[activeTab].period} | {experience[activeTab].location}
            </p>

            <ul className="space-y-4 pt-4">
              {experience[activeTab].achievements.map((item, i) => (
                <li key={i} className="flex gap-3 text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                  <span className="text-primary mt-1.5 min-w-[12px] text-xs">▹</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
