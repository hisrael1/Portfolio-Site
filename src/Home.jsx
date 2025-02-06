import background from './assets/background.jpg'
import headshot from './assets/headshot.png'

const Home = () => {
    return (
        <div className="relative flex items-center min-h-screen w-full">
        <img src={background} className="absolute top-0 left-0 h-screen object-cover w-full"/>
            <div className="w-full flex flex-col items-center text-slate-700 z-1">
                <img src={headshot} className="w-56 h-56 object-cover rounded-md mr-4" />
                <div className='p-2 text-3xl font-bold mt-2'>Harrison Israel</div>
                <div className='p-2 text-3xl'>Front-End Focused Full Stack Developer</div>
            </div>
        </div>
    )
}

export default Home;