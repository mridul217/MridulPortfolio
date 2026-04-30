import React from 'react';
import { FaGithub, FaLinkedin, FaGlobe, FaEnvelope, FaWhatsapp, FaExternalLinkAlt } from 'react-icons/fa';
import { personalInfo } from '../data/resume';

/**
 * DigitalVisitingCard Component
 * A modern, minimal, mobile-first personal landing page for Mridul Sharma.
 */
const DigitalVisitingCard: React.FC = () => {
  const projects = [
    {
      title: "Local AI AGENTS",
      description: "Build local agents for AI chat, automated blogging, social media content repurposing, and specialized AI interviewers for technical and managerial prep.",
      link: "https://github.com/mridul217/AIAgentsOnLocalMachine"
    },
    {
      title: "Chrome Extensions",
      description: "From productivity boosters to workflow enhancers, these extensions streamline daily tasks and elevate user experience across the web.",
      link: "https://techblogsbymridul.netlify.app/blog/3-chrome-extensions-i-built-to-boost-productivity-focus-and-workflow/"
    },
  ];

  const downloadVCard = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Mridul Sharma
TITLE:AI Engineer | Building Agentic Systems
TEL;TYPE=CELL:${personalInfo.phone}
EMAIL:${personalInfo.email}
URL:https://mridul217.netlify.app
END:VCARD`;
    const blob = new Blob([vcard], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Mridul_Sharma.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-slate-200 font-sans selection:bg-indigo-500/30 selection:text-indigo-200 overflow-x-hidden">
      {/* Background Ambient Glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-indigo-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-cyan-600/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <main className="relative max-w-md mx-auto px-6 pt-16 pb-32">
        {/* Profile Section */}
        <section className="text-center mb-12 animate-fade-in">
          <div className="relative inline-block mb-6">
            {/* Animated Ring */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-cyan-400 rounded-full blur-md opacity-40 scale-110 animate-pulse" />
            <div className="relative w-32 h-32 rounded-full p-[2px] bg-gradient-to-tr from-indigo-500/50 to-cyan-400/50">
              <img
                src="/avatar.png"
                alt="Mridul Sharma"
                className="w-full h-full rounded-full object-cover border-2 border-[#050505] shadow-2xl"
              />
            </div>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-white mb-2 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400">
            Mridul Sharma
          </h1>

          <p className="text-indigo-400 font-semibold tracking-wide text-sm uppercase mb-4">
            AI Engineer | Building Agentic Systems
          </p>

          <p className="text-slate-400 text-[15px] leading-relaxed max-w-[300px] mx-auto font-medium mb-8">
            I build AI agents, LLM-powered apps, and automation systems.
          </p>

          <button 
            onClick={downloadVCard}
            className="inline-flex items-center gap-2 px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-bold text-sm transition-all shadow-lg shadow-indigo-500/25 active:scale-95 animate-bounce-subtle"
          >
            <FaExternalLinkAlt className="text-xs" />
            Save to Contacts
          </button>
        </section>

        {/* Primary Action Buttons */}
        <section className="space-y-4 mb-16 animate-slide-up">
          <a
            href="https://mridul217.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between w-full p-4 bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 rounded-2xl transition-all duration-300 group backdrop-blur-sm"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300 shadow-inner">
                <FaGlobe className="text-xl" />
              </div>
              <span className="font-bold text-white tracking-tight">View Portfolio</span>
            </div>
            <FaExternalLinkAlt className="text-slate-600 text-xs group-hover:text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </a>

          <a
            href="https://github.com/mridul217"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between w-full p-4 bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 rounded-2xl transition-all duration-300 group backdrop-blur-sm"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-slate-800 rounded-xl text-slate-300 group-hover:bg-white group-hover:text-black transition-all duration-300">
                <FaGithub className="text-xl" />
              </div>
              <span className="font-bold text-white tracking-tight">GitHub</span>
            </div>
            <FaExternalLinkAlt className="text-slate-600 text-xs group-hover:text-white transition-all" />
          </a>

          <a
            href="https://www.linkedin.com/in/mridul217/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between w-full p-4 bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 rounded-2xl transition-all duration-300 group backdrop-blur-sm"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-600/10 rounded-xl text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <FaLinkedin className="text-xl" />
              </div>
              <span className="font-bold text-white tracking-tight">LinkedIn</span>
            </div>
            <FaExternalLinkAlt className="text-slate-600 text-xs group-hover:text-blue-400 transition-all" />
          </a>
        </section>

        {/* Featured Work Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-sm font-black uppercase tracking-[0.2em] text-indigo-500/80">
              Featured Work
            </h2>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-indigo-500/20 to-transparent" />
          </div>

          <div className="grid gap-4">
            {projects.map((project, idx) => (
              <a
                key={idx}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-indigo-500/20 hover:bg-white/[0.04] transition-all duration-300 group relative overflow-hidden block"
              >
                {/* Subtle Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <h3 className="font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="text-[11px] font-bold text-indigo-400/80 group-hover:text-indigo-400 flex items-center gap-1.5 uppercase tracking-wider transition-colors">
                  View Project
                  <FaExternalLinkAlt className="text-[9px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* QR Code Section */}
        <section className="text-center pt-10 border-t border-white/5 pb-10">
          <p className="text-[10px] text-indigo-400/80 mb-6 uppercase tracking-[0.3em] font-black">
            Scan to Connect
          </p>
          <div className="relative inline-block group">
            {/* QR Background Glow */}
            <div className="absolute inset-0 bg-indigo-500/20 blur-2xl rounded-full scale-75 group-hover:scale-100 transition-transform duration-500" />
            <a 
              href="https://mridul217.netlify.app/?vcard=true" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative block p-3 bg-white rounded-[2rem] shadow-2xl transition-transform duration-300 group-hover:scale-105"
            >
              <div className="relative">
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent("https://mridul217.netlify.app/?vcard=true")}&color=4f46e5&ecc=H`}
                  alt="Portfolio QR"
                  className="w-28 h-28"
                />
                {/* Central AI Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="bg-white p-1 rounded-lg">
                    <div className="bg-indigo-600 p-1 rounded-md shadow-lg">
                      <FaExternalLinkAlt className="text-white text-[8px]" />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </section>
      </main>

      {/* Sticky CTA */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 p-2 bg-slate-900/40 backdrop-blur-2xl border border-white/10 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-50 animate-slide-up" style={{ animationDelay: '0.5s' }}>
        <a
          href={`mailto:${personalInfo.email}`}
          className="flex items-center gap-2 px-6 py-3 bg-white text-black hover:bg-indigo-500 hover:text-white rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-lg active:scale-95"
        >
          <FaEnvelope className="text-sm" />
          Email Me
        </a>
        <a
          href={`https://wa.me/${personalInfo.phone}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-white/5 text-slate-300 hover:bg-green-500 hover:text-white rounded-full transition-all duration-300 active:scale-95 border border-white/5"
        >
          <FaWhatsapp className="text-xl" />
        </a>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(20px) translateX(-50%); opacity: 0; }
          to { transform: translateY(0) translateX(-50%); opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        .animate-slide-up {
          /* Note: sticky CTA uses translateX(-50%) so we need to handle that in the animation or adjust the classes */
          animation: fadeIn 1s ease-out forwards;
        }
        @keyframes bounceSubtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        .animate-bounce-subtle {
          animation: bounceSubtle 2s infinite ease-in-out;
        }
      `}} />
    </div>
  );
};

export default DigitalVisitingCard;
