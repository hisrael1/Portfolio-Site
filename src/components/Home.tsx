import background from '../assets/background.jpg';
import headshot from '../assets/headshot copy.png'
import { forwardRef, ForwardedRef, useEffect, useState, useRef } from 'react'
import githubLogo from "../assets/github-mark.png";
import { motion } from 'framer-motion';

interface LiquidDroplet {
    id: number;
    x: number;
    y: number;
    size: number;
    driftX: number;
    driftY: number;
    opacity: number;
    startTime: number;
}

const Home = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
    const [droplets, setDroplets] = useState<LiquidDroplet[]>([]);
    const dropletIdRef = useRef(0);
    const lastDropletTimeRef = useRef(0);
    const animationFrameRef = useRef<number>();

    useEffect(() => {
        const homeElement = ref as React.MutableRefObject<HTMLDivElement>;
        if (!homeElement.current) return;

        const createDroplet = (mouseX: number, mouseY: number): LiquidDroplet => {
            // Random offset from mouse position for organic feel
            const offsetRange = 25;
            const randomOffsetX = (Math.random() - 0.5) * offsetRange;
            const randomOffsetY = (Math.random() - 0.5) * offsetRange;
            
            // Random size variations
            const baseSize = 4;
            const sizeVariation = Math.random() * 6 + 2; // 2-8px range
            
            // Subtle random drift for natural movement
            const driftX = (Math.random() - 0.5) * 0.5; // Very subtle horizontal drift
            const driftY = Math.random() * 0.3; // Slight downward drift like gravity
            
            return {
                id: dropletIdRef.current++,
                x: mouseX + randomOffsetX,
                y: mouseY + randomOffsetY,
                size: sizeVariation,
                driftX,
                driftY,
                opacity: 0.8,
                startTime: Date.now()
            };
        };

        const handleMouseMove = (e: MouseEvent) => {
            const now = Date.now();
            
            // Throttle droplet creation - create 1-3 droplets every 50ms for natural feel
            if (now - lastDropletTimeRef.current < 50) return;
            lastDropletTimeRef.current = now;
            
            // Create 1-2 droplets per mouse move for richness
            const dropletCount = Math.random() > 0.6 ? 2 : 1;
            const newDroplets = Array.from({ length: dropletCount }, () => 
                createDroplet(e.clientX, e.clientY)
            );
            
            setDroplets(prev => [...prev, ...newDroplets]);
        };

        const handleMouseLeave = () => {
            // Gradually stop creating new droplets and let existing ones fade
            setDroplets(prev => prev.map(droplet => ({
                ...droplet,
                startTime: droplet.startTime - 500 // Accelerate fade-out
            })));
        };

        // Animation loop for droplet movement and fading
        const animate = () => {
            const now = Date.now();
            
            setDroplets(prev => 
                prev.map(droplet => {
                    const age = now - droplet.startTime;
                    const maxAge = 1500; // 1.5 seconds lifespan
                    
                    // Calculate new position with drift
                    const timeInSeconds = age / 1000;
                    const newX = droplet.x + (droplet.driftX * timeInSeconds * 20);
                    const newY = droplet.y + (droplet.driftY * timeInSeconds * 30);
                    
                    // Calculate opacity fade (fast fade in last 500ms)
                    let newOpacity;
                    if (age < maxAge - 500) {
                        newOpacity = 0.8; // Full opacity for most of life
                    } else {
                        const fadeProgress = (age - (maxAge - 500)) / 500;
                        newOpacity = 0.8 * (1 - fadeProgress);
                    }
                    
                    return {
                        ...droplet,
                        x: newX,
                        y: newY,
                        opacity: Math.max(0, newOpacity)
                    };
                }).filter(droplet => {
                    const age = now - droplet.startTime;
                    return age < 1500 && droplet.opacity > 0.01;
                })
            );
            
            animationFrameRef.current = requestAnimationFrame(animate);
        };

        // Start animation loop
        animationFrameRef.current = requestAnimationFrame(animate);

        // Event listeners - attached to Home component only
        homeElement.current.addEventListener('mousemove', handleMouseMove);
        homeElement.current.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            if (homeElement.current) {
                homeElement.current.removeEventListener('mousemove', handleMouseMove);
                homeElement.current.removeEventListener('mouseleave', handleMouseLeave);
            }
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, []);

    return (
        <div ref={ref} className="relative flex items-center min-h-screen w-full bg-black overflow-hidden">
            {/* Liquid droplet trail effect */}
            {droplets.map(droplet => (
                <div
                    key={droplet.id}
                    className="fixed pointer-events-none z-10 rounded-full"
                    style={{
                        left: droplet.x - droplet.size / 2,
                        top: droplet.y - droplet.size / 2,
                        width: droplet.size,
                        height: droplet.size,
                        opacity: droplet.opacity,
                        background: `radial-gradient(circle, rgba(34, 211, 238, ${droplet.opacity * 0.9}) 0%, rgba(59, 130, 246, ${droplet.opacity * 0.7}) 50%, rgba(147, 51, 234, ${droplet.opacity * 0.4}) 100%)`,
                        boxShadow: `0 0 ${droplet.size * 0.8}px rgba(34, 211, 238, ${droplet.opacity * 0.8}), 0 0 ${droplet.size * 1.5}px rgba(59, 130, 246, ${droplet.opacity * 0.4})`,
                        filter: 'blur(0.2px)',
                        transition: 'opacity 0.1s ease-out'
                    }}
                />
            ))}

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
                    <motion.h1 
                        className='text-7xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent leading-tight'
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        Harrison Israel
                    </motion.h1>
                    
                    <motion.h2 
                        className='text-2xl md:text-3xl text-gray-300 font-light mb-12 leading-relaxed'
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                    >
                        Front-End Focused Full-Stack Developer
                    </motion.h2>
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