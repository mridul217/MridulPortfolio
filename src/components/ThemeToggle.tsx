
import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { FiSun, FiMoon } from 'react-icons/fi';

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className={`
        fixed top-4 right-4 z-50 p-3 rounded-full shadow-lg transition-all duration-300
        ${theme === 'dark'
                    ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
                    : 'bg-white text-gray-800 hover:bg-gray-100'}
      `}
            aria-label="Toggle Theme"
        >
            {theme === 'dark' ? <FiSun size={24} /> : <FiMoon size={24} />}
        </button>
    );
}
