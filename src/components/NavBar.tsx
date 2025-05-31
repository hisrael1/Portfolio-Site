import { useState, useRef, RefObject } from "react";

interface NavBarProps {
  refs: {
    homeRef: RefObject<HTMLDivElement>;
    aboutRef: RefObject<HTMLDivElement>;
    projectsRef: RefObject<HTMLDivElement>;
    contactRef: RefObject<HTMLDivElement>;
  };
  currentSection: string;
}

const NavBar = (props: NavBarProps) => {
  const {
    refs: { homeRef, aboutRef, projectsRef, contactRef },
    currentSection
  } = props;
  const [mobileMenuModalOpen, setMobileMenuModalOpen] = useState<boolean>(false);
  const backgroundDiv = useRef<HTMLDivElement>(null);
  const menuModal = useRef<HTMLDivElement>(null);

  // Determine if current section has white background
  const isOnWhiteSection = currentSection === 'about' || currentSection === 'contact';

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
    <div className={`${isOnWhiteSection 
      ? 'bg-white/95 border-b border-gray-200 text-black' 
      : 'bg-black/90 border-b border-gray-800 text-white'
    } backdrop-blur-md w-full px-6 py-6 flex justify-center fixed top-0 z-50 transition-all duration-500`}>
      <div className="flex justify-between items-center w-full max-w-7xl">
        <div className={`font-bold text-6xl tracking-tight bg-gradient-to-r ${isOnWhiteSection 
          ? 'from-black to-gray-600' 
          : 'from-white to-gray-300'
        } bg-clip-text text-transparent`}>HSI</div>
        <div className="md:hidden">
          <button onClick={(): void => setMobileMenuModalOpen(true)}>
            <i className={`fa-solid fa-bars text-3xl px-4 cursor-pointer ${isOnWhiteSection 
              ? 'text-gray-700 hover:text-black' 
              : 'text-gray-300 hover:text-white'
            } transition-colors`}></i>
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
                className={`absolute top-0 right-0 ${isOnWhiteSection 
                  ? 'bg-white border-l border-gray-200' 
                  : 'bg-black border-l border-gray-800'
                } text-xl flex flex-col items-start w-72 z-50 py-8 px-6`}
                ref={menuModal}
              >
                <i
                  className={`fa-solid fa-circle-xmark absolute top-6 right-6 ${isOnWhiteSection 
                    ? 'text-gray-600 hover:text-black' 
                    : 'text-gray-400 hover:text-white'
                  } text-2xl cursor-pointer transition-colors`}
                  onClick={() => setMobileMenuModalOpen(false)}
                ></i>
                <div className="mt-8 space-y-4 w-full">
                  {navItems.map((navItem) => (
                    <button
                      key={navItem.label}
                      className={`w-full text-left px-4 py-3 ${isOnWhiteSection 
                        ? 'text-gray-700 hover:text-black hover:bg-gray-100' 
                        : 'text-gray-300 hover:text-white hover:bg-gray-900'
                      } rounded-lg transition-all duration-200 flex items-center`}
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
              className={`${isOnWhiteSection 
                ? 'text-gray-700 hover:text-black' 
                : 'text-gray-300 hover:text-white'
              } transition-colors duration-200 flex items-center font-medium`}
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
