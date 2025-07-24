import landbnb from '../assets/landbnb3.png';
import weGo from '../assets/weGo3.png';
import harrysPlants from '../assets/harrysPlants.png';
import personaFi from '../assets/PersonFi_img.png';
import LeadFlow from '../assets/LeadFlow1.png';

export interface Project {
    name: string;
    imageSrc: string;
    description: string;
    skills: string[];
    liveLink: string;
}

export const PROJECTS: Project[] = [
    {
        name: "LeadFlow",
        imageSrc: LeadFlow,
        description: "LeadFlow is an AI-powered lead qualification chatbot that transforms website visitors into booked sales appointments. Built as a demo real estate site, the intelligent agent uses OpenRouter's API with sophisticated function calling to dynamically fetch calendar availability and execute real-time bookings. Features advanced conversation history tracking, automated lead scoring, timezone-aware scheduling, and seamless API orchestration between AI services and Cal.com. The React/TypeScript architecture showcases custom hooks, context management, and production-grade error handling deployable as an embeddable widget across any industry.",
        skills: ["React", "TypeScript", "OpenRouter AI", "Cal.com API", "Function Calling APIs", "Advanced State Management", "Tailwind CSS"],
        liveLink: 'https://lead-flow-three.vercel.app/'
    },
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
]