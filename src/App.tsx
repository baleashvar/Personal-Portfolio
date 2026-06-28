import './index.css'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Resume from './sections/Resume'
import Projects from './sections/Projects'
import KnowMe from './sections/KnowMe'
import Contact from './sections/Contact'

const PLACEHOLDER_SECTIONS: string[] = []

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Resume />
        <Projects />
        <KnowMe />
        <Contact />
        {PLACEHOLDER_SECTIONS.map((id) => (
          <section
            key={id}
            id={id}
            style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid var(--border)' }}
          >
            <span style={{ color: 'var(--muted)', fontSize: '1.5rem', textTransform: 'capitalize' }}>
              {id} section
            </span>
          </section>
        ))}
      </main>
      <Footer />
    </>
  )
}

export default App
