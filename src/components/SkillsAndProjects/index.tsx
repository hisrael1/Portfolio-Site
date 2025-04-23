import ProjectCard from './ProjectCard';
import { PROJECTS } from '../../data/projects';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { forwardRef, ForwardedRef } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const SkillsAndProjects = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
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
                    {PROJECTS.map((project, idx) => (
                        <SwiperSlide key={project.name}>
                            <ProjectCard project={project} key={idx}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
})

export default SkillsAndProjects;