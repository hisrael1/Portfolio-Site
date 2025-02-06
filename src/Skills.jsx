// import landbnb from './assets/landbnb1.png'

// const projects = [
//     {
//         name: "Landbnb",
//         imageSrc: landbnb,
//         description: "Landbnb is a full-stack demo vacation rental app inspired by Airbnb. Explore interactive search, simulated bookings, and map-based property views—all built with React, Redux, Rails, PostgreSQL, AWS S3, and the Google Maps API."
//     },
//     {
//         name: "WeGo",
//         imageSrc: landbnb,
//         description: "Landbnb is a full-stack demo vacation rental app inspired by Airbnb. Explore interactive search, simulated bookings, and map-based property views—all built with React, Redux, Rails, PostgreSQL, AWS S3, and the Google Maps API."
//     },
//     {
//         name: "Harry's Plants",
//         imageSrc: landbnb,
//         description: "Landbnb is a full-stack demo vacation rental app inspired by Airbnb. Explore interactive search, simulated bookings, and map-based property views—all built with React, Redux, Rails, PostgreSQL, AWS S3, and the Google Maps API."
//     },
// ]

// const SkillsAndProjects = () => {
//     return (
//         <div className="bg-slate-500 text-slate-50 w-full flex justify-center py-12">
//             <div className="w-full max-w-5xl">
//                 <div className="text-4xl text-white">
//                     <i className="fa-solid fa-diagram-project mr-4"></i>
//                     Projects
//                 </div>
//                 <div className="flex border border-white flex-wrap justify-around">
//                     {projects.map((project) => (
//                         <div key={project.name} className="mt-16 bg-amber-50/40 m-4">
//                             <div className="product-card text-4xl">Landbnb</div>
//                             <img className="w-96 h-72 object-cover object-top" src={landbnb} />
//                         </div>
//                     ))}
//                 </div>
//                 {/* choose a layout for how I will display projects and consider updating resume */}
//                 {/* product cards carousel. Should I create a product show page or modal? Add transition for modal*/}
//             </div>
//         </div>
//     )
// }

// export default SkillsAndProjects;