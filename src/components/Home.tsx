import background from '../assets/background.jpg';
import headshot from '../assets/headshot copy.png'
import { forwardRef, ForwardedRef, useEffect, useState } from 'react'
import githubLogo from "../assets/github-mark.png";
import { motion } from 'framer-motion';

const Home = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        document.addEventListener('mousemove', handleMouseMove);
        return () => document.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div ref={ref} className="relative flex items-center min-h-screen w-full bg-black overflow-hidden">
            {/* Simple mouse follower effect */}
            <div
                className="fixed pointer-events-none z-10 transition-all duration-300 ease-out"
                style={{
                    left: mousePosition.x - 200,
                    top: mousePosition.y - 200,
                    width: 400,
                    height: 400,
                    background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, rgba(147, 51, 234, 0.1) 50%, transparent 70%)',
                    borderRadius: '50%',
                    filter: 'blur(20px)',
                }}
            />

            {/* Dark overlay on background image */}
            <img src={background} className="absolute top-0 left-0 h-screen object-cover w-full opacity-20"/>
            
            {/* Dark gradient overlay for better text contrast */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/90"></div>
            
            {/* Content */}
            <div className="relative w-full flex flex-col items-center text-white z-20 p-8 pt-32">
                <img 
                    src={headshot} 
                    className="w-64 h-64 object-cover rounded-full shadow-2xl border-4 border-white/10 mb-8"
                    style={{
                        filter: 'grayscale(100%) contrast(1.2) brightness(1.1)'
                    }}
                />
                
                <div className='text-center max-w-4xl'>
                    {/* <motion.h1  */}
                    <h1
                        className='text-7xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent leading-tight'
                        // initial={{ opacity: 0, y: 30 }}
                        // animate={{ opacity: 1, y: 0 }}
                        // transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        Harrison Israel
                    </h1>
                    {/* </motion.h1> */}
                    
                    {/* <motion.h2  */}
                    <h2 
                        className='text-2xl md:text-3xl text-gray-300 font-light mb-12 leading-relaxed'
                        // initial={{ opacity: 0, y: 30 }}
                        // animate={{ opacity: 1, y: 0 }}
                        // transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                    >
                        Front-End Focused Full-Stack Developer
                    {/* </motion.h2> */}
                    </h2>
                </div>
                
                <div className="flex justify-center space-x-8 items-center">
                    <a 
                        href="https://www.linkedin.com/in/harrison-israel/"
                        className="group transition-all duration-300 hover:scale-110"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 group-hover:bg-white/20 group-hover:border-white/40 transition-all duration-300">
                            <svg className="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                            </svg>
                        </div>
                    </a>
                    
                    <a 
                        href="https://github.com/hisrael1"
                        className="group transition-all duration-300 hover:scale-110"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 group-hover:bg-white/20 group-hover:border-white/40 transition-all duration-300">
                            <img src={githubLogo} className="w-8 h-8 invert" alt="GitHub" />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
})

export default Home;