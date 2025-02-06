import landbnb from '../assets/landbnb3.png';
import weGo from '../assets/weGo3.png';
import harrysPlants from '../assets/harrysPlants.png'
import ProjectCard from './ProjectCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const projects = [
    {
        name: "Landbnb",
        imageSrc: landbnb,
        description: "Landbnb is a full-stack demo vacation rental app inspired by Airbnb. Explore interactive search, simulated bookings, and map-based property views—all built with React, Redux, Rails, PostgreSQL, AWS S3, and the Google Maps API.",
        skills: ["React", "Redux", "Ruby on Rails", "PostgreSQL", "AWS S3", "Google Maps API", "User Authentication", "RESTful API"]
    },
    {
        name: "WeGo",
        imageSrc: weGo,
        description: "WeGo is a full-stack social networking app that connects users based on shared activity interests. Built with the MERN stack (MongoDB, Express, React/Redux, Node.js) and AWS, it features multi-criteria activity search, real-time state management, and a robust data model for user matching. The application showcases efficient data handling through Express middleware and MongoDB constraints, delivering a seamless experience for users to discover and connect over shared interests.",
        skills: ["MongoDB", "Express", "React", "Redux", "Node.js", "AWS", "HTML5", "CSS3"]
    },
    {
        name: "Harry's Plants",
        imageSrc: harrysPlants,
        description: "Harry's Plants is a polished e-commerce plant shop built with React and Tailwind CSS, featuring an intuitive shopping experience with dynamic cart management and responsive design. The frontend application showcases advanced React patterns including custom hooks, context management, and reusable components—from modals with click-outside detection to time-based access controls. The project demonstrates best practices in state management, component architecture, and mobile-first design.",
        skills: ["React", "Javascript", "Tailwind", "React Router Dom"]
    },
]

const SkillsAndProjects = () => {
    return (
        <div className="bg-slate-500 text-slate-50 w-full flex justify-center py-12">
            <div className="w-full max-w-5xl">
                <div className="text-4xl text-white">
                    <i className="fa-solid fa-diagram-project mr-4"></i>
                    Projects
                </div>
                <Swiper className="swiper"
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    loop={true}
                >
                    {projects.map((project, idx) => (
                        <SwiperSlide key={project.name}>
                            <ProjectCard project={project} idx={idx}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default SkillsAndProjects;