import { forwardRef, ForwardedRef } from 'react';

const AboutMe = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
    return (
        <div ref={ref} className="bg-white w-full flex flex-col items-center py-32 px-6 min-h-screen">
            <div className="w-full max-w-5xl">
                <div className="text-6xl md:text-7xl font-bold text-black mb-20 text-center tracking-tight">
                    About Me
                </div>
                
                <div className="max-w-4xl mx-auto space-y-10">
                    <p className="text-2xl md:text-3xl text-gray-900 leading-relaxed font-medium">
                        Hey, I'm Harrison.
                    </p>
                    
                    <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light">
                        I started in tech sales, which taught me something crucial: the best products solve real problems for real people. But I kept finding myself more interested in building the solution than selling it.
                    </p>
                    
                    <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light">
                        So I made the jump to engineering. For the past year and a half at Nosto, I've been building AI-powered search and recommendation features that help millions of shoppers actually find what they're looking for.
                    </p>
                    
                    <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light">
                        These days I'm deep in the AI tooling rabbit hole, using Cursor and Claude to ship faster, building with vector databases, and exploring what's actually possible when you combine LLMs with good engineering. My latest project, PersonaFi, uses embeddings to simulate conversations with Twitter personalities.
                    </p>
                    
                    <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light">
                        When I'm not coding, I'm running loops around Central Park, hunting for waves on Long Island, or cooking whatever looks good at the market.
                    </p>
                    
                    <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light">
                        I'm looking for an early-stage AI company that's building something people will actually use. I'm low ego, high ownership, and ready to contribute from day one. If you're doing something interesting with LLMs and need someone who can ship, let's talk.
                    </p>
                </div>
                
                <div className="flex justify-center mt-20">
                    <button 
                        className="group bg-black text-white px-10 py-5 text-xl font-semibold rounded-xl hover:bg-gray-800 transition-all duration-300 flex items-center shadow-xl hover:shadow-2xl hover:scale-105 transform"
                        onClick={() => {
                            window.open(encodeURI('/Harrison Israel - Software Engineer Resume.pdf'))
                        }}
                    >
                        <i className="fa-solid fa-download mr-4 text-xl group-hover:scale-110 transition-transform duration-200"></i>
                        Download Resume
                    </button>
                </div>
            </div>
        </div>
    )
})

export default AboutMe;