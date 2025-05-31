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
  const [currentSection, setCurrentSection] = useState('home');

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  useEffect(() => {
    const observerOptions = {
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute('data-section');
          if (sectionId) {
            setCurrentSection(sectionId);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    if (homeRef.current) {
      homeRef.current.setAttribute('data-section', 'home');
      observer.observe(homeRef.current);
    }
    if (aboutRef.current) {
      aboutRef.current.setAttribute('data-section', 'about');
      observer.observe(aboutRef.current);
    }
    if (projectsRef.current) {
      projectsRef.current.setAttribute('data-section', 'projects');
      observer.observe(projectsRef.current);
    }
    if (contactRef.current) {
      contactRef.current.setAttribute('data-section', 'contact');
      observer.observe(contactRef.current);
    }

    return () => observer.disconnect();
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
      
      <NavBar refs={{homeRef, aboutRef, projectsRef, contactRef}} currentSection={currentSection}/>
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
