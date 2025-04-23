import Home from './components/Home';
import AboutMe from './components/AboutMe';
import SkillsAndProjects from './components/SkillsAndProjects';
import NavBar from './components/NavBar';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import { useRef } from 'react'

const App = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex justify-center">
      <div className="relative w-full flex flex-col items-center h-screen">
        <NavBar refs={{homeRef, aboutRef, projectsRef, contactRef}}/>
        <Home ref={homeRef} />
        <AboutMe ref={aboutRef} />
        <SkillsAndProjects ref={projectsRef} />
        <ContactMe ref={contactRef} />
        <Footer /> 
      </div>
    </div>
  )
}

export default App
