
import React from 'react';
import { personalInfo } from '../data/resume';

export default function Contact() {
  return (
    <section id="contact" className="py-20 text-center max-w-2xl mx-auto">
      <p className="text-primary text-lg mb-4 font-mono">05. What's Next?</p>
      <h2 className="text-4xl md:text-5xl font-bold text-lightText dark:text-gray-100 mb-6">
        Get In Touch
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
        I'm always open to contributing to something interesting. Whether you have a question or just want to say hi,
        I'll try my best to get back to you!
      </p>
      <a
        href={`mailto:${personalInfo.email}`}
        className="inline-block px-8 py-4 border-2 border-primary text-primary hover:bg-primary/10 transition-all rounded-lg font-bold"
      >
        Say Hello
      </a>
    </section>
  );
}
