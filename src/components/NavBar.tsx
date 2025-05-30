import { useState, useRef, RefObject } from "react";

interface NavBarProps {
  refs: {
    homeRef: RefObject<HTMLDivElement>;
    aboutRef: RefObject<HTMLDivElement>;
    projectsRef: RefObject<HTMLDivElement>;
    contactRef: RefObject<HTMLDivElement>;
  };
}

const NavBar = (props: NavBarProps) => {
  const {
    refs: { homeRef, aboutRef, projectsRef, contactRef },
  } = props;
  const [mobileMenuModalOpen, setMobileMenuModalOpen] =
    useState<boolean>(false);
  const backgroundDiv = useRef<HTMLDivElement>(null);
  const menuModal = useRef<HTMLDivElement>(null);

  interface NavItem {
    label: string;
    iconClass: string;
    ref: RefObject<HTMLDivElement>;
  }

  const navItems: NavItem[] = [
    {
      label: "Home",
      iconClass: "fa-house",
      ref: homeRef,
    },
    {
      label: "About Me",
      iconClass: "fa-user",
      ref: aboutRef,
    },
    {
      label: "Projects",
      iconClass: "fa-code",
      ref: projectsRef,
    },
    {
      label: "Contact Me",
      iconClass: "fa-phone",
      ref: contactRef,
    },
  ];

  return (
    <div className="bg-black border-b border-gray-800 w-full px-6 py-6 text-white flex justify-center fixed top-0 z-50 backdrop-blur-md bg-black/90">
      <div className="flex justify-between items-center w-full max-w-7xl">
        <div className="font-bold text-6xl tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">HSI</div>
        <div className="md:hidden">
          <button onClick={(): void => setMobileMenuModalOpen(true)}>
            <i className="fa-solid fa-bars text-3xl px-4 cursor-pointer text-gray-300 hover:text-white transition-colors"></i>
          </button>
          {mobileMenuModalOpen && (
            <div
              className="backdrop-blur-sm fixed top-0 left-0 w-full h-full z-50 bg-black/50"
              ref={backgroundDiv}
              onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
                const clickedElement = e.target as HTMLElement;
                if (
                  backgroundDiv.current?.contains(clickedElement) &&
                  !menuModal.current?.contains(clickedElement)
                ) {
                  setMobileMenuModalOpen(false);
                }
              }}
            >
              <div
                className="absolute top-0 right-0 bg-black border-l border-gray-800 text-xl flex flex-col items-start w-72 z-50 py-8 px-6"
                ref={menuModal}
              >
                <i
                  className="fa-solid fa-circle-xmark absolute top-6 right-6 text-gray-400 hover:text-white text-2xl cursor-pointer transition-colors"
                  onClick={() => setMobileMenuModalOpen(false)}
                ></i>
                <div className="mt-8 space-y-4 w-full">
                  {navItems.map((navItem) => (
                    <button
                      key={navItem.label}
                      className="w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-900 rounded-lg transition-all duration-200 flex items-center"
                      onClick={() => {
                        setMobileMenuModalOpen(false);
                        navItem.ref.current?.scrollIntoView({
                          behavior: "smooth",
                        });
                      }}
                    >
                      <i className={`${navItem.iconClass} fa-solid mr-3 w-5`}></i>
                      {navItem.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="text-lg hidden md:flex space-x-8">
          {navItems.map((navItem) => (
            <button
              key={navItem.label}
              className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center font-medium"
              onClick={() =>
                navItem.ref.current?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <i className={`${navItem.iconClass} fa-solid mr-2`}></i>
              {navItem.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
