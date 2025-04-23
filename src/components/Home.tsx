import background from '../assets/background.jpg';
import headshot from '../assets/headshot.png'
import { forwardRef, ForwardedRef } from 'react'
import githubLogo from "../assets/github-mark.png";

const Home = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
    return (
        <div ref={ref} className="relative flex items-center min-h-screen w-full">
            <img src={background} className="absolute top-0 left-0 h-screen object-cover w-full"/>
            <div className="w-full flex flex-col items-center text-slate-700 z-1 p-8">
                <img src={headshot} className="w-56 h-56 object-cover rounded-md mr-4" />
                <div className='p-2 text-3xl font-bold mt-2 text-center'>Harrison Israel</div>
                <div className='p-2 text-3xl text-center'>Front-End Focused Full-Stack Developer</div>
                <div className="flex justify-center my-2 items-center">
                    <a href="https://www.linkedin.com/in/harrison-israel/">
                        <svg className="w-12 h-12 mx-4 text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" focusable="false">
                            <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                        </svg>
                    </a>
                    <a href="https://github.com/hisrael1">
                        <img src={githubLogo} className="w-12 h-12 mx-4" />
                    </a>
                </div>
            </div>
        </div>
    )
})

export default Home;