import headshot from './assets/headshot.png';
import { forwardRef } from 'react';

const AboutMe = forwardRef((props, ref) => {
    return (
        <div ref={ref} className="about-me bg-slate-50 w-full flex flex-col items-center py-12 px-6">
            <div className="text-4xl text-indigo-900 font-bold pb-8">
                <i className="fa-solid fa-user mr-4 text-4xl"></i>
                About Me
            </div>
            <div className="flex flex-col items-center">
                <div className="flex flex-col md:flex-row justify-center w-full max-w-4xl items-center md:items-start">
                    <div className='w-80 shrink-0 flex flex-col items-center'>
                        <img src={headshot} className="w-80 h-80 object-cover rounded-md shadow-xl shrink-0"/>
                        <button className="cursor-pointer border border-slate-300 px-6 py-4 text-xl mt-8 mb-8 rounded-lg shadow-md flex items-center hover:text-white hover:bg-black" onClick={() => {
                            window.open('/Harrison S. Israel - Resume.pdf')
                        }}>
                            <i className="fa-solid fa-download mr-2 text-3xl"></i>
                            Download CV
                        </button>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-indigo-900 px-8 text-lg">
                            I&apos;m Harrison Israel, a New York-based developer with nearly two years 
                            of professional experience building responsive robust, scalable web applications. 
                            I create intuitive, responsive interfaces using React.js, JavaScript, Tailwind CSS, HTML5, and CSS3. 
                            I also have experience crafting backend solutions with Node, Express, and Ruby on Rails. 
                            My work spans full stack projects, from real-time search and dynamic state management to RESTful APIs. 
                            Whether tackling frontend challenges, full stack complexities, or interacting with others, I’m driven by a passion for clean code, 
                            clear and collaborative communication, and tangible results.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default AboutMe;