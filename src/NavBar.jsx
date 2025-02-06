const NavBar = () => {
    return (
        <div className="bg-slate-600 w-full px-4 py-4 text-slate-100 flex justify-center">
            <div className="flex justify-between items-center w-full max-w-6xl">
                <div className="dancing-script-font text-5xl">
                    HSI
                </div>
                <div className="flex text-xl">
                    <div className="mx-4">
                        <i className="fa-solid fa-house mr-2"></i>
                        Home
                    </div>
                    <div className="mx-4">
                        <i className="fa-solid fa-user mr-2"></i>
                        About Me
                    </div>
                    <div className="mx-4">
                        <i className="fa-solid fa-diagram-project mr-2"></i>
                        Projects
                    </div>
                    <div className="mx-4">
                        <i className="fa-solid fa-phone mr-2"></i>
                        Let&apos;s Connect
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar;