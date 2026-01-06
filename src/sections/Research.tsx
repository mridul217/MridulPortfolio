
import React from 'react';
import { researchPapers } from '../data/resume';
import { FaBookOpen, FaExternalLinkAlt } from 'react-icons/fa';

export default function Research() {
    return (
        <section id="research" className="py-20">
            <div className="flex items-center gap-4 mb-12">
                <h2 className="text-3xl font-bold text-lightText dark:text-white shrink-0">
                    <span className="text-primary mr-2">04.</span> Research & Publications
                </h2>
                <div className="h-px bg-gray-300 dark:bg-gray-700 w-full max-w-xs"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {researchPapers.map((paper, index) => (
                    <a
                        key={index}
                        href={paper.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block bg-white dark:bg-darkCard p-8 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 dark:border-transparent"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <FaBookOpen className="text-3xl text-primary mb-4" />
                            <FaExternalLinkAlt className="text-gray-400 group-hover:text-primary transition-colors" />
                        </div>

                        <h3 className="text-xl font-bold text-lightText dark:text-gray-100 group-hover:text-primary transition-colors mb-2">
                            {paper.title}
                        </h3>

                        <div className="text-sm font-mono text-secondary dark:text-accent mb-4">
                            Published in {paper.publisher}
                        </div>

                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                            {paper.description}
                        </p>
                    </a>
                ))}
            </div>
        </section>
    );
}
