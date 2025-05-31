import { Project } from '../../data/projects';

interface ProjectCardProps {
    project: Project;
}

const ProjectCard = (props: ProjectCardProps) => {
    const { project } = props;

    const isInProgress = project.liveLink === 'in-progress';

    return (
        <div className="group bg-white rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] max-w-md w-full h-full flex flex-col">
            {/* Image Section */}
            <div className="relative overflow-hidden bg-gray-50">
                <img 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110 block" 
                    src={project.imageSrc} 
                    alt={project.name}
                    style={{
                        filter: 'grayscale(100%) contrast(1.2) brightness(1.1)'
                    }}
                />
            </div>
            
            {/* Content Section */}
            <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-gray-800 transition-colors">
                    {project.name}
                </h3>
                
                <p className="text-gray-700 text-sm leading-relaxed mb-6 flex-1">
                    {project.description}
                </p>
                
                {/* Skills Tags - Auto Scrolling */}
                <div className="mb-6 overflow-hidden">
                    <div 
                        className="flex gap-2"
                        style={{
                            animation: 'scroll-left 15s linear infinite',
                            width: 'max-content',
                            animationName: 'scroll-left'
                        }}
                    >
                        {/* First set of skills */}
                        {project.skills.map((skill, index) => (
                            <span 
                                key={`first-${index}`}
                                className="px-3 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full border border-gray-200 whitespace-nowrap flex-shrink-0"
                            >
                                {skill}
                            </span>
                        ))}
                        {/* Duplicate set for seamless loop */}
                        {project.skills.map((skill, index) => (
                            <span 
                                key={`second-${index}`}
                                className="px-3 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full border border-gray-200 whitespace-nowrap flex-shrink-0"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
                
                {/* CTA Button */}
                {isInProgress ? (
                    <div className="w-full bg-gray-400 text-white py-3 px-6 rounded-xl font-semibold text-center flex items-center justify-center cursor-not-allowed mt-auto">
                        <i className="fa-solid fa-clock mr-3"></i>
                        In Progress
                    </div>
                ) : (
                    <a 
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn w-full bg-black text-white py-3 px-6 rounded-xl font-semibold text-center block hover:bg-gray-800 transition-all duration-300 hover:shadow-lg mt-auto"
                    >
                        <span className="flex items-center justify-center">
                            View Live Demo
                            <i className="fa-solid fa-external-link ml-2 text-sm group-hover/btn:translate-x-1 transition-transform duration-200"></i>
                        </span>
                    </a>
                )}
            </div>
        </div>
    )
}

export default ProjectCard;