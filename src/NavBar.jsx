import { useState, useRef } from 'react';

const NavBar = (props) => {
    const { refs: { homeRef, aboutRef, projectsRef, contactRef } } = props;
    const [mobileMenuModalOpen, setMobileMenuModalOpen] = useState(false);
    const backgroundDiv = useRef();

    return (
        <div className="bg-slate-600 w-full px-4 py-4 text-slate-100 flex justify-center">
            <div className="flex justify-between items-center w-full max-w-6xl">
                <div className="dancing-script-font text-5xl">
                    HSI
                </div>
                <div className="md:hidden">
                    <button onClick={() => setMobileMenuModalOpen(true)}>
                        <i className="fa-solid fa-bars text-4xl px-4 cursor-pointer text-slate-300"></i>
                    </button>
                    {
                        mobileMenuModalOpen && <div className="backdrop-blur-sm fixed top-0 left-0 w-full h-full z-2" ref={backgroundDiv} onClick={(e) => {
                            const clickedElement = e.target.value;
                            if (!backgroundDiv.current.contains(clickedElement)) {
                                setMobileMenuModalOpen(false);
                            }
                        }}>
                            <div className="absolute top-0 right-0 bg-slate-600 text-xl flex flex-col items-start w-56 z-4 py-8 px-4">
                                <i className="fa-solid fa-circle-xmark absolute top-4 right-4 bg-slate-700 text-slate-400 rounded-full text-3xl"
                                    onClick={() => setMobileMenuModalOpen(false)}
                                ></i>
                                <button className="mx-4 cursor-pointer my-1" onClick={() => {
                                    setMobileMenuModalOpen(false);
                                    homeRef.current.scrollIntoView({behavior: 'smooth'});
                                }}>
                                    <i className="fa-solid fa-house mr-2 w-8"></i>
                                    Home
                                </button>
                                <button className="mx-4 cursor-pointer my-1" onClick={() => {
                                    setMobileMenuModalOpen(false);
                                    aboutRef.current.scrollIntoView({behavior: 'smooth'})
                                }}>
                                    <i className="fa-solid fa-user mr-2 w-8"></i>
                                    About Me
                                </button>
                                <button className="mx-4 cursor-pointer my-1" onClick={() => {
                                    setMobileMenuModalOpen(false);
                                    projectsRef.current.scrollIntoView({behavior: 'smooth'})
                                }}>
                                    <i className="fa-solid fa-code mr-2 w-8"></i>
                                    Projects
                                </button>
                                <button className="mx-4 cursor-pointer my-1" onClick={() => {
                                    setMobileMenuModalOpen(false);
                                    contactRef.current.scrollIntoView({behavior: 'smooth'})
                                }}>
                                    <i className="fa-solid fa-phone mr-2 w-8"></i>
                                    Contact Me
                                </button>
                            </div>
                        </div>
                    }
                </div>
                <div className="text-xl hidden md:flex">
                    <button className="mx-4 cursor-pointer" onClick={() => homeRef.current.scrollIntoView({behavior: 'smooth'})}>
                        <i className="fa-solid fa-house mr-2"></i>
                        Home
                    </button>
                    <button className="mx-4 cursor-pointer" onClick={() => aboutRef.current.scrollIntoView({behavior: 'smooth'})}>
                        <i className="fa-solid fa-user mr-2"></i>
                        About Me
                    </button>
                    <button className="mx-4 cursor-pointer" onClick={() => projectsRef.current.scrollIntoView({behavior: 'smooth'})}>
                        <i className="fa-solid fa-code mr-2"></i>
                        Projects
                    </button>
                    <button className="mx-4 cursor-pointer" onClick={() => contactRef.current.scrollIntoView({behavior: 'smooth'})}>
                        <i className="fa-solid fa-phone mr-2"></i>
                        Contact Me
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NavBar;