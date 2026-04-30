import React from 'react';
import { FaIdCard } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

/**
 * DigitalCardToggle Component
 * A floating button that links to the Digital Visiting Card version of the site.
 */
const DigitalCardToggle: React.FC = () => {
    const { theme } = useTheme();

    return (
        <a
            href="/?vcard=true"
            className={`
                fixed top-4 right-20 z-50 p-3 rounded-full shadow-lg transition-all duration-300 flex items-center gap-2 group
                ${theme === 'dark'
                    ? 'bg-indigo-600 text-white hover:bg-indigo-500 shadow-indigo-500/20'
                    : 'bg-white text-indigo-600 hover:bg-slate-50 shadow-slate-200'}
            `}
            aria-label="View Digital Card"
        >
            <FaIdCard size={24} className="group-hover:rotate-12 transition-transform" />
            <span className="max-w-0 overflow-hidden group-hover:max-w-[100px] transition-all duration-500 ease-in-out whitespace-nowrap font-bold text-xs uppercase tracking-wider">
                Digital Card
            </span>
        </a>
    );
};

export default DigitalCardToggle;
