export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Dark Mode Colors
        darkBg: "#0B0F1A",
        darkCard: "#151B2E",
        darkText: "#E2E8F0",
        
        // Light Mode Colors
        lightBg: "#F8FAFC",
        lightCard: "#FFFFFF",
        lightText: "#1E293B",

        // Accents
        primary: "#6366F1", // Indigo
        secondary: "#EC4899", // Pink
        accent: "#06B6D4", // Cyan
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Assuming we might want a nice font later, but keeping default for now
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      }
    }
  },
  plugins: []
}
