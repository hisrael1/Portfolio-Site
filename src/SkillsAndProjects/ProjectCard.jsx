/* eslint-disable react/prop-types */
const ProjectCard = (props) => {
    const { project } = props;

    return (
        <div className="flex-1 my-12 mx-12 flex flex-col items-center">
            <img className="object-cover rounded-lg" src={project.imageSrc} />
            <div className="text-white text-2xl mt-10">
                {project.description}
            </div>
        </div>
    )
}

export default ProjectCard;


{/* <div key={project.name} className="mt-16 bg-amber-500/40 m-4 max-w-[50%]">
<img className="object-cover object-top rounded-md" src={project.imageSrc} />
<div className="bg-white flex flex-col items-center">
    <div className="product-card text-4xl">{project.name}</div>
    <div className="flex justify-center border border-amber-600 flex-wrap">
        {project.skills.map(((skill, idx) => (
            <span key={idx} className="bg-blue-400 rounded-md px-2 mx-2 my-1">{skill}</span>
        )))}
    </div>
</div>
</div> */}