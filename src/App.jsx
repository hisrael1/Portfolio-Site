import Home from './Home';
import AboutMe from './AboutMe';
import SkillsAndProjects from './SkillsAndProjects';
import NavBar from './NavBar';
import ContactMe from './ContactMe';
import Footer from './Footer';

const App = () => {
  return (
    <div className="flex justify-center">
      <div className="relative w-full flex flex-col items-center h-screen w-max-5xl">
        <NavBar />
        <Home />
        <AboutMe />
        <SkillsAndProjects />
        <ContactMe />
        <Footer /> 
      </div>
    </div>
  )
}

export default App
