import ProjectCard from './ProjectCard';
import { PROJECTS } from '../../data/projects';
import { forwardRef, ForwardedRef } from 'react';

const SkillsAndProjects = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
    return (
        <div ref={ref} className="bg-black text-white w-full flex justify-center py-32 px-8 min-h-screen">
            <div className="w-full max-w-6xl">
                <div className="text-6xl md:text-7xl font-bold text-white mb-24 text-center tracking-tight">
                    <i className="fa-solid fa-code mr-6 text-blue-400"></i>
                    Projects
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-items-center">
                    {PROJECTS.map((project, idx) => (
                        <ProjectCard project={project} key={idx}/>
                    ))}
                </div>
            </div>
        </div>
    )
})

export default SkillsAndProjects;