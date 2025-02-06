import Home from './Home';
import AboutMe from './AboutMe';
import SkillsAndProjects from './SkillsAndProjects';
import NavBar from './NavBar';
import ContactMe from './ContactMe';
import Footer from './Footer';
import { useRef } from 'react'

const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

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
