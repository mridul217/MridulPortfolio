import { useEffect, useState } from 'react'
import ReactGA from 'react-ga4'
import { useSectionTracking } from './hooks/useSectionTracking'
import { ThemeProvider } from './context/ThemeContext'
import ThemeToggle from './components/ThemeToggle'
import Hero from './sections/Hero'
import About from './sections/About'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Research from './sections/Research'
import Contact from './sections/Contact'
import DigitalVisitingCard from './components/DigitalVisitingCard'
import DigitalCardToggle from './components/DigitalCardToggle'

export default function App() {
  const [isVCard, setIsVCard] = useState(false);

  useEffect(() => {
    // Check if user wants to see the digital visiting card
    const params = new URLSearchParams(window.location.search);
    if (params.get('vcard') === 'true') {
      setIsVCard(true);
    }

    // Initialize Google Analytics
    ReactGA.initialize('G-89T07ZQRBC')
    // Send initial pageview for the root route
    ReactGA.send({ hitType: "pageview", page: window.location.pathname })
  }, [])

  // Track sections as virtual page views
  useSectionTracking()

  if (isVCard) {
    return <DigitalVisitingCard />;
  }


  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300 bg-lightBg dark:bg-darkBg text-lightText dark:text-darkText font-sans selection:bg-primary selection:text-white">
        <ThemeToggle />
        <DigitalCardToggle />
        <main className="container mx-auto px-4 md:px-6 lg:px-8 py-8">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Research />
          <Contact />
        </main>

        <footer className="py-6 text-center text-sm opacity-60">
          <p>© {new Date().getFullYear()} Mridul Sharma.</p>
        </footer>
      </div>
    </ThemeProvider>
  )
}
