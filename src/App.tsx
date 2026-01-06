import { ThemeProvider } from './context/ThemeContext'
import ThemeToggle from './components/ThemeToggle'
import Hero from './sections/Hero'
import About from './sections/About'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Research from './sections/Research'
import Contact from './sections/Contact'

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300 bg-lightBg dark:bg-darkBg text-lightText dark:text-darkText font-sans selection:bg-primary selection:text-white">
        <ThemeToggle />
        <main className="container mx-auto px-6 py-8">
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
