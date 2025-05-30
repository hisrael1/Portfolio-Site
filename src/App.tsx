import Home from './components/Home';
import AboutMe from './components/AboutMe';
import SkillsAndProjects from './components/SkillsAndProjects';
import NavBar from './components/NavBar';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import { useRef, useEffect, useState } from 'react'

const App = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <div className="bg-black relative min-h-screen">
      {/* Mouse cursor effect */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        }}
      />
      
      <NavBar refs={{homeRef, aboutRef, projectsRef, contactRef}}/>
      <div className="relative w-full flex flex-col items-center">
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
