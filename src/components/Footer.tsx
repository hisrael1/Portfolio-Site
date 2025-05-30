import githubLogo from "../assets/github-mark.png";

const Footer = () => {
    return (
        <div className="bg-black w-full flex justify-center py-12 border-t border-gray-800">
            <div className="flex space-x-8 items-center">
                <a 
                    href="https://www.linkedin.com/in/harrison-israel/"
                    className="group transition-all duration-300 hover:scale-110"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 group-hover:bg-white/20 group-hover:border-white/40 transition-all duration-300">
                        <svg className="w-7 h-7 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                        </svg>
                    </div>
                </a>
                
                <a 
                    href="https://github.com/hisrael1"
                    className="group transition-all duration-300 hover:scale-110"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 group-hover:bg-white/20 group-hover:border-white/40 transition-all duration-300">
                        <img src={githubLogo} className="w-7 h-7 invert" alt="GitHub" />
                    </div>
                </a>
                
                <a 
                    href="https://wellfound.com/u/harrison-israel"
                    className="group transition-all duration-300 hover:scale-110"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 group-hover:bg-white/20 group-hover:border-white/40 transition-all duration-300">
                        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 554.89997 266.70002">
                            <path d="M 80.9,263.59999 0,2.9999988 H 75.3 L 123,190.39999 174.9,2.9999988 h 75.5 L 302.3,190.39999 350,2.9999988 h 75.3 L 343.5,263.59999 H 263.3 L 212.7,75.399999 161.1,263.59999 H 80.9 Z"></path>
                            <circle cx="511.09995" cy="222.89999" fill="#EC2E3A" r="43.799999"></circle>
                            <circle cx="511.09995" cy="43.799999" fill="#EC2E3A" r="43.799999"></circle>
                        </svg>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Footer;