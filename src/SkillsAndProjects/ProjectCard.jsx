const ProjectCard = (props) => {
    const { project } = props;

    return (
        <div className="flex-1 my-12 mx-12 flex flex-col items-center">
            <a className="cursor-pointer" href={project.liveLink}>
                <img className="object-cover rounded-lg" src={project.imageSrc} />
            </a>
            <div className="text-white text-2xl mt-10">
                {project.description}
            </div>
        </div>
    )
}

export default ProjectCard;