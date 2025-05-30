import headshot from '../assets/headshot.png';
import { forwardRef, ForwardedRef } from 'react';

const AboutMe = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
    return (
        <div ref={ref} className="about-me bg-slate-50 w-full flex flex-col items-center py-12 px-6">
            <div className="text-4xl text-indigo-900 font-bold pb-8">
                <i className="fa-solid fa-user mr-4 text-4xl"></i>
                About Mer
            </div>
            <div className="flex flex-col items-center">
                <div className="flex flex-col md:flex-row justify-center w-full max-w-4xl items-center md:items-start">
                    <div className='w-80 shrink-0 flex flex-col items-center'>
                        <img src={headshot} className="w-80 h-80 object-cover rounded-md shadow-xl shrink-0"/>
                        <button className="cursor-pointer border border-slate-300 px-6 py-4 text-xl mt-8 mb-8 rounded-lg shadow-md flex items-center hover:text-white hover:bg-black" onClick={() => {
                            // window.open(encodeURI('/Harrison Israel - Front-End Engineer Resume.pdf'))
                            window.open(encodeURI('/Harrison Israel - Software Engineer Resume.pdf'))
                        }}>
                            <i className="fa-solid fa-download mr-2 text-3xl"></i>
                            Download CV
                        </button>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-indigo-900 px-8 text-lg">
                        Hey, I'm Harrison.

I started in tech sales, which taught me something crucial: the best products solve real problems for real people. But I kept finding myself more interested in building the solution than selling it.

So I made the jump to engineering. For the past year and a half at Nosto, I've been building AI-powered search and recommendation features that help millions of shoppers actually find what they're looking for.

These days I'm deep in the AI tooling rabbit hole, using Cursor and Claude to ship faster, building with vector databases, and exploring what's actually possible when you combine LLMs with good engineering. My latest project, PersonaFi, uses embeddings to simulate conversations with Twitter personalities. 

When I'm not coding, I'm running loops around Central Park, hunting for waves on Long Island, or cooking whatever looks good at the market.

I'm looking for an early-stage AI company that's building something people will actually use. I’m low ego, high ownership, and ready to contribute from day one. If you're doing something interesting with LLMs and need someone who can ship, let's talk.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default AboutMe;