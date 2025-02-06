import landbnb from '../assets/landbnb3.png';
import weGo from '../assets/weGo3.png';
import harrysPlants from '../assets/harrysPlants.png'
import ProjectCard from './ProjectCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { forwardRef } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const projects = [
    {
        name: "Harry's Plants",
        imageSrc: harrysPlants,
        description: "Harry's Plants is a polished e-commerce plant shop built with React and Tailwind CSS, featuring an intuitive shopping experience with dynamic cart management and responsive design. The frontend application showcases advanced React patterns including custom hooks, context management, and reusable components—from modals with click-outside detection to time-based access controls. The project demonstrates best practices in state management, component architecture, and mobile-first design.",
        skills: ["React", "Javascript", "Tailwind", "React Router Dom"],
        liveLink: 'https://harrys-plants-ecommerce-demo.vercel.app/'
    },
    {
        name: "WeGo",
        imageSrc: weGo,
        description: "WeGo is a full-stack social networking app that connects users based on shared activity interests. Built with the MERN stack (MongoDB, Express, React/Redux, Node.js) and AWS, it features multi-criteria activity search, real-time state management, and a robust data model for user matching. The application showcases efficient data handling through Express middleware and MongoDB constraints, delivering a seamless experience for users to discover and connect over shared interests.",
        skills: ["MongoDB", "Express", "React", "Redux", "Node.js", "AWS", "HTML5", "CSS3"],
        liveLink: 'https://wegoapp.dev/#/'
    },
    {
        name: "Landbnb",
        imageSrc: landbnb,
        description: "Landbnb is a full-stack vacation rental platform inspired by Airbnb, built with React, Redux and Ruby on Rails. It features interactive property search with map integration, dynamic filtering, real-time booking management, and secure user authentication. The application leverages PostgreSQL for efficient data modeling, AWS S3 for media storage, and the Google Maps API for location-based discovery.",
        skills: ["React", "Redux", "Ruby on Rails", "PostgreSQL", "AWS S3", "Google Maps API", "User Authentication", "RESTful API"],
        liveLink: 'https://landbnb-us.herokuapp.com/#/'
    },
]

const SkillsAndProjects = forwardRef((props, ref) => {
    return (
        <div ref={ref} className="projects bg-slate-500 text-slate-50 w-full flex justify-center py-12 px-8">
            <div className="w-full max-w-5xl">
                <div className="text-4xl text-white">
                    <i className="fa-solid fa-code mr-4"></i>
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
})

export default SkillsAndProjects;