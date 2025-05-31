import landbnb from '../assets/landbnb3.png';
import weGo from '../assets/weGo3.png';
import harrysPlants from '../assets/harrysPlants.png';
import personaFi from '../assets/PersonFi_img.png';

export interface Project {
    name: string;
    imageSrc: string;
    description: string;
    skills: string[];
    liveLink: string;
}

export const PROJECTS: Project[] = [
    {
        name: "PersonaFi",
        imageSrc: personaFi,
        description: "Ever wanted to chat with your favorite Twitter personality? PersonaFi makes it happen. I built this AI chat platform that studies real tweets to recreate how people actually write and think. Pick any Twitter user and have a conversation that feels surprisingly authentic. The magic happens through semantic search and vector databases that ground every response in real data.",
        skills: ["React", "TypeScript", "Node.js", "Express.js", "ChromaDB", "OpenRouter AI", "Docker", "Tailwind CSS"],
        liveLink: 'in-progress'
    },
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