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
        <div ref={ref} className="bg-black text-white w-full flex justify-center py-24 px-8 min-h-screen">
            <div className="w-full max-w-6xl">
                <div className="text-5xl md:text-6xl font-bold text-white mb-16 text-center">
                    <i className="fa-solid fa-code mr-4"></i>
                    Projects
                </div>
                <Swiper 
                    className="swiper"
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ 
                        clickable: true,
                        bulletClass: 'swiper-pagination-bullet',
                        bulletActiveClass: 'swiper-pagination-bullet-active'
                    }}
                    loop={true}
                    spaceBetween={30}
                    centeredSlides={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 1.2,
                        },
                        1024: {
                            slidesPerView: 1.5,
                        },
                    }}
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